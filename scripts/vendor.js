const currentCalculationOutput = document.getElementById("current_calculation");
const currentResultOutput = document.getElementById("current_result");
const usrInput = document.getElementById("input_number");
const addBtn = document.getElementById("btn_add");
const subtractBtn = document.getElementById("btn_subtract");
const multiplyBtn = document.getElementById("btn_multiply");
const divideBtn = document.getElementById("btn_divide");

function outputResult(text, result) {
  currentCalculationOutput.textContent = text;
  currentResultOutput.textContent = result;
}
