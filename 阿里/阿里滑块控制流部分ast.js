const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default
const types = require("@babel/types")
const generator = require("@babel/generator").default
const myTool = require("./myTool.js");
const myControlTool = require("./controlFlowTool.js");
console.time("处理完毕，耗时");

//获取ast
var ast = myTool.getAst();

//NOTE:根据switch获取控制流字典
var controlList, controlFlowDict, controlPathDict
var returnBreak


function reFlowDict() {
    controlList = myControlTool.getStartControlFlowData(ast, "Kc");
    controlFlowDict = controlList[0], controlPathDict = controlList[1];
    myControlTool.getLeft(controlFlowDict);
}

reFlowDict()

while (true) {
    let sequenceBreak = myControlTool.mergeSequenceStatement(controlFlowDict, controlPathDict)
    ast = myTool.reAst(ast)
    reFlowDict()
    let ifBreak = myControlTool.mergeIfStatement(controlFlowDict, controlPathDict)
    ast = myTool.reAst(ast)
    reFlowDict()
    let ifTwoBreak = myControlTool.mergeIfStatementTwo(controlFlowDict, controlPathDict)
    ast = myTool.reAst(ast)
    reFlowDict()
    let whileBreak = myControlTool.mergeLoopStatement(controlFlowDict, controlPathDict)
    ast = myTool.reAst(ast)
    reFlowDict()
    let whileBreakTwo = myControlTool.mergeLoopStatementTwo(controlFlowDict, controlPathDict)
    ast = myTool.reAst(ast)
    reFlowDict()
    if (sequenceBreak && ifBreak && ifTwoBreak && whileBreak && whileBreakTwo) break
}


debugger
// 写入文件
myTool.writeFile(ast);
console.timeEnd("处理完毕，耗时");
