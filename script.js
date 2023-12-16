// Calculator elements
var viewer_accumulator = document.querySelector("#accumulator"), // Viewer for previous number
  viewer_result = document.querySelector("#result"), // Viewer for current number
  calc_nums = document.querySelectorAll(".num"), // List of numbers
  calc_ops = document.querySelectorAll(".ops"), // List of operators
  calc_equals = document.getElementById("equals"), // Equal button
  calc_clear = document.getElementById("clear"), // Clear button
  calc_clear_entry = document.getElementById("clear_entry"), // Clear entry button
  calc_backspace = document.getElementById("backspace"); // Backspace button

//Variables
var previousNum = "",
  currentNum = "",
  resultNum;

const operators = ["+", "-", "*", "/"];

// Clicking on number for selecting them
function setNum() {
  if (previousNum.charAt(previousNum.length - 1) === "=") {
    clear();
  }
  currentNum += this.getAttribute("data-num"); // Add digits to previous number
  result.innerHTML = currentNum; // Display current number
}

function isOperator(char) {
  return operators.includes(char);
}

function operationSelection() {
  if (
    isOperator(previousNum.charAt(previousNum.length - 1)) &&
    currentNum === ""
  ) {
    previousNum = previousNum.slice(0, -1) + this.innerHTML;
    viewer_accumulator.innerHTML = previousNum;
  } else {
    previousNum += currentNum;
    currentNum = "";
    previousNum += this.innerHTML;
    viewer_accumulator.innerHTML = previousNum;
    viewer_result.innerHTML = "";
  }
}

function calculateResult() {
  previousNum += currentNum;
  currentNum = "";
  resultNum = eval(previousNum);
  previousNum += "=";
  viewer_accumulator.innerHTML = previousNum;
  viewer_result.innerHTML = resultNum;
}

function clear() {
  currentNum = "";
  previousNum = "";
  resultNum = "";
  viewer_accumulator.innerHTML = "";
  viewer_result.innerHTML = "0";
}

function clearEntry() {
  if (operators.includes(previousNum)) {
    previousNum = "";
    viewer_accumulator.innerHTML = "0";
  } else {
    currentNum = "";
    viewer_result.innerHTML = "";
  }
}

function removeChar() {
  if (currentNum !== "") {
    currentNum = currentNum.slice(0, -1);
    viewer_result.innerHTML = currentNum;
  } else {
    previousNum = previousNum.slice(0, -1);
    viewer_accumulator.innerHTML = previousNum;
  }
}

// Add click event to stuff

// Add click event to numbers
for (var i = 0, l = calc_nums.length; i < l; i++) {
  calc_nums[i].onclick = setNum;
}

// Add click event to operators
for (var i = 0, l = calc_ops.length; i < l; i++) {
  calc_ops[i].onclick = operationSelection;
}

// Add click event to clear
calc_clear.onclick = clear;

// Add click event to clear entry
calc_clear_entry.onclick = clearEntry;

// Add click event to equal sign
calc_equals.onclick = calculateResult;

// Add click event to backspace
calc_backspace.onclick = removeChar;
