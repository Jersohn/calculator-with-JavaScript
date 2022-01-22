const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function writeToLog(prevNumber, operation, newNumber, newResult) {
  const logEntry = {
    operation: operation,
    prevResult: prevNumber,
    number: newNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
//Generates and writes calculation log
function createAndWriteOutput(resultBeforeCalculation, operator, calcNumber) {
  const calcDescription = `${resultBeforeCalculation} ${operator} ${calcNumber}`;
  outputResult(calcDescription, currentResult); //from vendor files
}
function add() {
  const enteredNumber = parseInt(usrInput.value); //get inputs from input field
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput(initialResult, "+", enteredNumber);
  writeToLog(initialResult, "ADD", enteredNumber, currentResult);
}
function subtract() {
  const enteredNumber = parseInt(usrInput.value);
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput(initialResult, "-", enteredNumber);
  writeToLog(initialResult, "SUBTRACT", enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = parseInt(usrInput.value);
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput(initialResult, "*", enteredNumber);
  writeToLog(initialResult, "MULTIPLY", enteredNumber, currentResult);
}
function divide() {
  const enteredNumber = parseInt(usrInput.value);
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput(initialResult, "/", enteredNumber);
  writeToLog(initialResult, "DIVIDE", enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
