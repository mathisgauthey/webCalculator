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
  // If there was a result displayed, clear everything before continuing
  if (previousNum.charAt(previousNum.length - 1) === "=") {
    clear();
  }
  if (this.getAttribute("data-num") === ".") {
    currentNum += this.getAttribute("data-num");
  }
  // Add a new member to the current number and display it
  else if (currentNum === "0") {
    currentNum = this.getAttribute("data-num"); // Replace 0 with the first digit
  } else {
    currentNum += this.getAttribute("data-num"); // Add digits to previous number
  }
  result.innerHTML = currentNum; // Display current number
}

// Verify if a character is an operator
function isOperator(char) {
  return operators.includes(char);
}

function operationSelection() {
  // If the accumulator has an operator for last character and the current number is empty, replace the operator with the new one
  if (
    isOperator(previousNum.charAt(previousNum.length - 1)) &&
    currentNum === ""
  ) {
    previousNum = previousNum.slice(0, -1) + this.innerHTML;
    viewer_accumulator.innerHTML = previousNum;
  }
  // Else, if the accumulator has an operator for last character and the current number is not empty, calculate the result and add the new operator
  else {
    previousNum += currentNum; // Add the current number
    currentNum = ""; // Reset the current number
    previousNum += this.innerHTML; // Add the operator
    // Update display
    viewer_accumulator.innerHTML = previousNum;
    viewer_result.innerHTML = currentNum;
  }
}

function calculateResult() {
  // Calculation
  previousNum += currentNum;
  resultNum = eval(previousNum);
  // Prepare for result display
  currentNum = "";
  previousNum += "=";
  // Display result
  viewer_accumulator.innerHTML = previousNum;
  viewer_result.innerHTML = resultNum;
}

// Clear everything and reset default calculator state
function clear() {
  // Clear variables
  previousNum = "";
  currentNum = "0";
  resultNum = "";
  // Clear display
  viewer_accumulator.innerHTML = previousNum;
  viewer_result.innerHTML = currentNum;
}

// Clear the current entry only
function clearEntry() {
  currentNum = "0";
  viewer_result.innerHTML = currentNum;
}

function removeChar() {
  currentNum = currentNum.slice(0, -1);
  if (currentNum === "") {
    currentNum = "0";
  }
  viewer_result.innerHTML = currentNum;
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
