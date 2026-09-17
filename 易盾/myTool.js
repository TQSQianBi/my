const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default
const types = require("@babel/types")
const files = require('fs');
const generator = require("@babel/generator").default

//js混淆代码读取
function getAst() {
    const encodeFile = process.argv.length > 2 ? process.argv[2] : "./encode.js";  //默认的js文件
    let sourceCode = files.readFileSync(encodeFile, {encoding: "utf-8"});
    return parser.parse(sourceCode);
}

//写入文件
function writeFile(ast) {
    const encodeFile = process.argv.length > 2 ? process.argv[2] : "./encode.js";  //默认的js文件
    const decodeFile = process.argv.length > 3 ? process.argv[3] : encodeFile.slice(0, encodeFile.length - 3) + "_ok.js";
    const decodeCompactFile = process.argv.length > 3 ? process.argv[3] : encodeFile.slice(0, encodeFile.length - 3) + "_compactOk.js";
    let code = generator(ast, opts = {
        "compact": false,  // 是否压缩代码
        "comments": false,  // 是否保留注释
        "jsescOption": {"minimal": false},  //Unicode转义
    }).code;
    files.writeFile(decodeFile, code, (err) => {
    });
    let compactCode = generator(ast, opts = {
        "compact": true,  // 是否压缩代码
        "comments": false,  // 是否保留注释
        "jsescOption": {"minimal": false},  //Unicode转义
    }).code;
    files.writeFile(decodeCompactFile, compactCode, (err) => {});
}

//重置ast
function reAst(ast){
    ast = parser.parse(generator(ast).code)
}

//二进制/八进制/十六进制数值及十六进制字符串,Unicode字符串还原
function simplifyLiteral(ast) {
    const simplifyLiteral = {
        NumericLiteral({node}) {
            if (node.extra && /^0[obx]/i.test(node.extra.raw)) {
                node.extra = undefined;
            }
        },
        StringLiteral({node}) {
            if (node.extra && /\\[ux]/gi.test(node.extra.raw)) {
                node.extra = undefined;
            }
        }
    }
    traverse(ast, simplifyLiteral);
}

//常量合并
function calcPartBinaryExpression(ast) {
    const calcPartBinaryExpression =
        {
            BinaryExpression: {
                exit(path) {
                    let {parent, scope, parentPath, node} = path;
                    let {left, operator, right} = node;
                    if (types.isLiteral(left) && types.isLiteral(right)) {
                        const {confident, value} = path.evaluate();
                        if (!confident || value == "Infinity") return;
                        path.replaceWith(types.valueToNode(value));
                        return;
                    }

                    if (parentPath.isBinaryExpression({left: node})) {
                        if (!types.isLiteral(left) && operator == "+" &&
                            types.isLiteral(right)) {
                            if (parent.operator == "+" && types.isLiteral(parent.right)) {

                                path.node.right.value += parent.right.value;

                                parentPath.replaceWith(path.node);
                            }
                        }
                    }
                },
            }
        }
    traverse(ast, calcPartBinaryExpression);
}

// 导出
module.exports = {
    writeFile,//写入文件
    getAst,//获取ast
    simplifyLiteral,//简单字符串还原
    calcPartBinaryExpression, //常量合并
    reAst,//重置AST
};