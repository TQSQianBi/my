#!/usr/bin/env node
/**
 * 通用 obfuscator.io / 网易易盾 类 JS 混淆还原器
 *
 * 核心原理(动态执行):
 *   混淆代码的字符串被放进"大数组",访问时通过"解码函数" base64/rc4 解密。
 *   与其重新实现每一种编码,不如把 [大数组声明 + 旋转IIFE + 解码函数] 提取出来,
 *   在沙箱里真实运行,再对所有 "解码函数(...)" 调用求值并替换成字面量。
 *   这样自定义字母表 base64、rc4、自旋转数组都能自动适配。
 *
 * 附带处理:
 *   - switch(true)/switch(常量) 布尔分发 → if/else(含 fall-through)
 *   - 字典对象 obj['key'] → 字面量(常量值)
 *   - 常量折叠(hex/unicode/二进制运算/取反/a=a)
 *   - 死代码清理(失效的解码函数/数组、空语句)
 *
 * 用法:
 *   node ob解混淆通用.js [输入文件] [输出文件前缀]
 *   默认输入 ./encode.js → 输出 encode_ok.js / encode_compactOk.js
 */
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;
const fs = require("fs");

// ==================== 基础工具 ====================
function getAst(file) {
    const src = fs.readFileSync(file, { encoding: "utf-8" });
    return parser.parse(src, { sourceType: "script" });
}

function writeFile(ast, outFile) {
    const code = generator(ast, {
        compact: false,
        comments: false,
        jsescOption: { minimal: false },
    }).code;
    fs.writeFileSync(outFile, code, "utf-8");
    const compact = generator(ast, {
        compact: true,
        comments: false,
        jsescOption: { minimal: false },
    }).code;
    fs.writeFileSync(outFile.replace(/\.js$/, "") + "_compactOk.js", compact, "utf-8");
    console.log(`已写入: ${outFile} / ${outFile.replace(/\.js$/, "")}_compactOk.js`);
}

function reAst(ast) {
    return parser.parse(generator(ast).code, { sourceType: "script" });
}

// ==================== 1. 常量折叠 ====================
function simplifyLiteral(ast) {
    traverse(ast, {
        NumericLiteral(path) {
            if (path.node.extra && /^0[obx]/i.test(path.node.extra.raw)) path.node.extra = undefined;
        },
        StringLiteral(path) {
            if (path.node.extra && /\\[ux]/gi.test(path.node.extra.raw)) path.node.extra = undefined;
        },
    });
}

function foldConstants(ast) {
    let changed = true;
    while (changed) {
        changed = false;
        traverse(ast, {
            BinaryExpression: {
                exit(path) {
                    const ev = path.evaluate();
                    if (!ev.confident) return;
                    const v = ev.value;
                    if (typeof v === "number" && (v === Infinity || v === -Infinity || Number.isNaN(v))) return;
                    path.replaceWith(types.valueToNode(v));
                    changed = true;
                },
            },
            UnaryExpression(path) {
                if (path.node.operator === "!" && types.isNumericLiteral(path.node.argument)) {
                    path.replaceWith(types.booleanLiteral(!path.node.argument.value));
                    changed = true;
                }
            },
            AssignmentExpression(path) {
                if (
                    types.isIdentifier(path.node.left) &&
                    types.isIdentifier(path.node.right) &&
                    path.node.left.name === path.node.right.name
                ) {
                    if (types.isExpressionStatement(path.parentPath.node)) path.remove();
                    else path.replaceInline(types.identifier(path.node.left.name));
                    changed = true;
                }
            },
        });
    }
}

// ==================== 2. 字符串数组解码(动态执行) ====================
function findStringArrays(ast) {
    const arrays = [];
    traverse(ast, {
        VariableDeclarator(path) {
            if (!types.isArrayExpression(path.node.init)) return;
            const elems = path.node.init.elements;
            if (elems.length < 5) return;
            const strCount = elems.filter((e) => e && types.isStringLiteral(e)).length;
            if (strCount >= elems.length * 0.9) {
                arrays.push({ name: path.node.id.name, declPath: path, elementCount: elems.length });
            }
        },
    });
    return arrays;
}

function findDecoders(ast, arrays) {
    // 收集所有"实参可常量求值"的调用点,按 callee 名分组
    const callSites = new Map();
    traverse(ast, {
        CallExpression(path) {
            const callee = path.node.callee;
            if (!types.isIdentifier(callee)) return;
            const argPaths = path.get("arguments");
            if (argPaths.length === 0) return;
            if (!argPaths.every((a) => a.evaluate().confident)) return;
            if (!callSites.has(callee.name)) callSites.set(callee.name, []);
            callSites.get(callee.name).push(path);
        },
    });

    const decoders = [];
    for (const arr of arrays) {
        const binding = arr.declPath.scope.getBinding(arr.name);
        if (!binding) continue;
        const funcPaths = new Set();
        for (const ref of binding.referencePaths) {
            const fn = ref.getFunctionParent();
            if (fn) funcPaths.add(fn);
        }
        for (const fnPath of funcPaths) {
            const fnName =
                (fnPath.node.id && fnPath.node.id.name) ||
                (fnPath.parentPath.isVariableDeclarator() &&
                    fnPath.parentPath.node.id &&
                    fnPath.parentPath.node.id.name);
            if (!fnName) continue;
            if (!callSites.has(fnName)) continue;
            // 记录用于删除的声明节点
            let declPath = fnPath;
            if (fnPath.parentPath.isVariableDeclarator()) declPath = fnPath.parentPath;
            decoders.push({
                name: fnName,
                fnPath: fnPath,
                declPath: declPath,
                arrayName: arr.name,
                callSitePaths: callSites.get(fnName),
            });
        }
    }
    // 去重(同一函数可能命中多个数组)
    const seen = new Set();
    return decoders.filter((d) => (seen.has(d.name) ? false : (seen.add(d.name), true)));
}

function findRotationIIFE(ast, arrayName) {
    let found = null;
    traverse(ast, {
        CallExpression(path) {
            if (found) return;
            if (!types.isFunctionExpression(path.node.callee)) return;
            if (!path.node.arguments.some((a) => types.isIdentifier(a) && a.name === arrayName)) return;
            const code = path.toString();
            if (/while\s*\(\s*!!\[\]\s*\)/.test(code) && /push/.test(code) && /shift/.test(code)) {
                found = path.node;
            }
        },
    });
    return found;
}

function buildSandbox(parts, exportNames) {
    const exportStmt = "return { " + [...new Set(exportNames)].join(", ") + " };";
    const code = parts.join("\n") + "\n" + exportStmt;
    const factory = new Function("window", "document", "self", "globalThis", "navigator", "location", code);
    const shim = {};
    return factory(shim, shim, shim, shim, shim, shim);
}

// 替换单个解码函数的调用
function replaceDecodeCalls(ast, decoder) {
    const sandbox = decoder._sandbox;
    const valueMap = new Map();
    for (const callPath of decoder.callSitePaths) {
        const args = callPath.get("arguments").map((a) => a.evaluate().value);
        const key = JSON.stringify(args);
        if (valueMap.has(key)) continue;
        try {
            const fn = sandbox[decoder.name];
            if (typeof fn !== "function") continue;
            const v = fn.apply(sandbox, args);
            if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") valueMap.set(key, v);
        } catch (e) {
            // 单个求值失败,跳过
        }
    }
    let replaced = 0;
    for (const callPath of decoder.callSitePaths) {
        const args = callPath.get("arguments").map((a) => a.evaluate().value);
        const key = JSON.stringify(args);
        if (!valueMap.has(key)) continue;
        const binding = callPath.scope.getBinding(decoder.name);
        if (binding && binding.path !== decoder.fnPath) continue;
        try {
            callPath.replaceWith(types.valueToNode(valueMap.get(key)));
            replaced++;
        } catch (e) {
            // 替换失败(如作为赋值左值),跳过
        }
    }
    return replaced;
}

// 字符串数组还原(单轮),返回本轮替换数量
function restoreStringArrayOnce(ast) {
    const arrays = findStringArrays(ast);
    if (arrays.length === 0) return 0;
    const decoders = findDecoders(ast, arrays);
    if (decoders.length === 0) return 0;
    if (!global.__obArraysLogged) {
        console.log(`检测到候选字符串数组: ${arrays.length} 个,解码函数: ${decoders.map((d) => d.name).join(", ")}`);
        global.__obArraysLogged = true;
    }

    let total = 0;
    for (const decoder of decoders) {
        if (decoder._sandbox) continue; // 本轮已处理
        const arr = arrays.find((a) => a.name === decoder.arrayName);
        if (!arr) continue;
        const rot = findRotationIIFE(ast, decoder.arrayName);
        const parts = [
            "var " + generator(arr.declPath.node).code,
        ];
        if (rot) parts.push("(" + generator(rot).code + ")");
        parts.push(generator(decoder.fnPath.node).code);
        let sandbox;
        try {
            sandbox = buildSandbox(parts, [decoder.name, decoder.arrayName]);
        } catch (e) {
            continue;
        }
        // 样例验证
        const sample = decoder.callSitePaths[0];
        if (!sample) continue;
        try {
            const arg = sample.get("arguments")[0].evaluate().value;
            const v = sandbox[decoder.name](arg);
            console.log(`  验证 ${decoder.name}(${arg}) => ${JSON.stringify(String(v).slice(0, 40))}`);
        } catch (e) {
            continue;
        }
        decoder._sandbox = sandbox;
        const n = replaceDecodeCalls(ast, decoder);
        total += n;
        console.log(`  替换 ${decoder.name} 调用 ${n} 处`);
    }
    return total;
}

// 解码循环入口: 反复执行直到稳定(处理嵌套解码调用)
function restoreStringArray(ast) {
    let total = 0;
    for (let round = 0; round < 20; round++) {
        const n = restoreStringArrayOnce(ast);
        if (n === 0) break;
        total += n;
        ast = reAst(ast);
    }
    return total;
}

// ==================== 3. switch 简化 ====================
// 任意 switch 转 if/else 链: switch(x){ case c0: A; case c1: B; default: C }
//   → if(x===c0){ A+B... } else if(x===c1){ B... } else { C }
// 判别式非常量且带副作用时,先用临时变量缓存(switch 只求值一次判别式)。
function simplifySwitch(ast) {
    let count = 0;
    traverse(ast, {
        SwitchStatement(path) {
            const cases = path.node.cases;
            if (cases.length === 0) return;
            const discPath = path.get("discriminant");

            let discNode;
            const discEv = discPath.evaluate();
            if (discEv.confident) {
                discNode = types.valueToNode(discEv.value);
            } else if (types.isIdentifier(discPath.node)) {
                discNode = discPath.node;
            } else {
                // 复杂/带副作用判别式 → 临时变量缓存一次
                const tmpName = "_ob_disp_" + count;
                discNode = types.identifier(tmpName);
                path.insertBefore(
                    types.variableDeclaration("var", [
                        types.variableDeclarator(discNode, discPath.node),
                    ])
                );
            }

            function collectBody(from) {
                const stmts = [];
                for (let j = from; j < cases.length; j++) {
                    for (const stmt of cases[j].consequent) {
                        if (types.isBreakStatement(stmt)) return stmts;
                        stmts.push(stmt);
                    }
                }
                return stmts;
            }

            function buildIf(i) {
                if (i >= cases.length) return null;
                const c = cases[i];
                if (!c.test) {
                    const body = collectBody(i);
                    return body.length ? types.blockStatement(body) : null;
                }
                const cond = types.binaryExpression("===", c.test, types.cloneNode(discNode, true));
                const alternate = buildIf(i + 1) || types.blockStatement([]);
                return types.ifStatement(cond, types.blockStatement(collectBody(i)), alternate);
            }

            const newIf = buildIf(0);
            if (!newIf) return;
            path.replaceInline(newIf);
            count++;
        },
    });
    return count;
}

// ==================== 4. 字典对象还原 ====================
function restoreDict(ast) {
    const dicts = new Map();
    traverse(ast, {
        VariableDeclarator(path) {
            if (types.isObjectExpression(path.node.init)) {
                dicts.set(path.node.id.name, { declPath: path, objPath: path.get("init") });
            }
        },
    });

    let replaced = 0;
    traverse(ast, {
        MemberExpression(path) {
            const parent = path.parentPath.node;
            if (
                (types.isAssignmentExpression(parent) && parent.left === path.node) ||
                (types.isUpdateExpression(parent) && parent.argument === path.node) ||
                (types.isUnaryExpression(parent) && parent.operator === "delete")
            ) {
                return;
            }
            if (!types.isIdentifier(path.node.object)) return;
            const name = path.node.object.name;
            const d = dicts.get(name);
            if (!d) return;
            const binding = path.scope.getBinding(name);
            if (!binding || binding.path !== d.declPath) return;
            if (!types.isStringLiteral(path.node.property)) return;
            const key = path.node.property.value;

            let valNode = null;
            for (const prop of d.objPath.node.properties) {
                if (
                    types.isObjectProperty(prop) &&
                    ((types.isStringLiteral(prop.key) && prop.key.value === key) ||
                        (types.isIdentifier(prop.key) && prop.key.name === key))
                ) {
                    valNode = prop.value;
                    break;
                }
            }
            if (!valNode) return;
            if (
                types.isStringLiteral(valNode) ||
                types.isNumericLiteral(valNode) ||
                types.isBooleanLiteral(valNode) ||
                types.isNullLiteral(valNode)
            ) {
                // 引用该字典成员的位置不是赋值目标
                path.replaceWith(types.cloneNode(valNode, true));
                replaced++;
            }
        },
    });
    return replaced;
}

// ==================== 5. 死代码清理 ====================
// 外部引用数 = 所有引用 - 函数体内部的自引用
function externalRefCount(path, binding) {
    const own = path.node;
    return binding.referencePaths.filter((ref) => !ref.findParent((p) => p.node === own)).length;
}

// 反复删除"无外部引用"的函数/数组声明,直到稳定(级联清理)
function removeUnused(ast) {
    for (let guard = 0; guard < 30; guard++) {
        let removed = false;
        traverse(ast, {
            FunctionDeclaration(path) {
                const binding = path.scope.getBinding(path.node.id.name);
                if (binding && binding.path === path && binding.constantViolations.length === 0) {
                    if (externalRefCount(path, binding) === 0) {
                        path.remove();
                        removed = true;
                    }
                }
            },
            VariableDeclarator(path) {
                const init = path.node.init;
                const isTarget =
                    types.isFunctionExpression(init) ||
                    types.isArrowFunctionExpression(init) ||
                    types.isArrayExpression(init);
                if (!isTarget) return;
                const binding = path.scope.getBinding(path.node.id.name);
                if (binding && binding.path === path && binding.constantViolations.length === 0) {
                    if (externalRefCount(path, binding) === 0) {
                        if (path.parentPath.node.declarations.length === 1) path.parentPath.remove();
                        else path.remove();
                        removed = true;
                    }
                }
            },
            EmptyStatement(path) {
                path.remove();
            },
        });
        if (!removed) break;
        ast = reAst(ast); // 刷新 binding,级联清理(解码函数删掉后数组引用归零)
    }
    return ast;
}

// ==================== 主流程 ====================
function main() {
    const encodeFile = process.argv.length > 2 ? process.argv[2] : "./encode.js";
    let outPrefix = process.argv.length > 3 ? process.argv[3] : encodeFile.replace(/\.js$/, "_ok.js");
    if (!outPrefix.endsWith(".js")) outPrefix = outPrefix + ".js";
    if (!fs.existsSync(encodeFile)) {
        console.error(`输入文件不存在: ${encodeFile}`);
        process.exit(1);
    }

    let ast = getAst(encodeFile);
    const startTime = Date.now();

    // 前置: 字面量/常量折叠
    simplifyLiteral(ast);
    foldConstants(ast);
    ast = reAst(ast);
    console.log("[1/5] 常量折叠完成");

    // 字符串数组解码(循环到稳定)
    const replaced = restoreStringArray(ast);
    console.log(`[2/5] 字符串数组解码完成(共替换 ${replaced} 处)`);
    ast = reAst(ast);

    // 删除已失效的解码函数和数组
    ast = removeUnused(ast);

    // 字典还原
    const dictN = restoreDict(ast);
    console.log(`[3/5] 字典还原完成(替换 ${dictN} 处)`);
    ast = reAst(ast);

    // switch 简化
    const swN = simplifySwitch(ast);
    ast = reAst(ast);
    console.log(`[4/5] switch 简化完成(简化 ${swN} 个)`);

    // 二次折叠 + 清理
    foldConstants(ast);
    ast = removeUnused(ast);

    writeFile(ast, outPrefix);
    console.log(`[5/5] 完成,耗时 ${((Date.now() - startTime) / 1000).toFixed(1)}s`);
}

main();
