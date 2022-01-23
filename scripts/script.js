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

function calculateResult(calculationType) {
  const enteredNumber = parseInt(usrInput.value); //get inputs from input field
  if (
    (calculationType === "ADD" &&
      calculationType === "SUBTRACT" &&
      calculationType === "MULTIPLY" &&
      calculationType === "DIVIDE") ||
    !enteredNumber // if enternumber===0
  ) {
    return;
  }
  const initialResult = currentResult;
  let operator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    operator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    operator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    operator = "*";
  } else {
    currentResult /= enteredNumber;
    operator = "/";
  }
  createAndWriteOutput(initialResult, operator, enteredNumber);
  writeToLog(initialResult, calculationType, enteredNumber, currentResult);
}
//Generates and writes calculation log
function createAndWriteOutput(resultBeforeCalculation, operator, calcNumber) {
  const calcDescription = `${resultBeforeCalculation} ${operator} ${calcNumber}`;
  outputResult(calcDescription, currentResult); //from vendor files
}
function add() {
  calculateResult("ADD");
}
function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}
function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
