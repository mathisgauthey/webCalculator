// Variables
var viewer = document.querySelector("#viewer"), // Calculator screen where result is displayed
  equals = document.querySelector("#equals"), // Equal button
  nums = document.querySelectorAll(".num"), // List of numbers
  ops = document.querySelectorAll(".ops"), // List of operators
  currentNum = "",
  previousNum = "",
  resultNum,
  operator;

// Clicking on number for selecting them
function setNum() {
  currentNum += this.getAttribute("data-num"); // Add digits to previous number

  viewer.innerHTML = currentNum; // Display current number
}

function operationSelection() {
  previousNum = currentNum;
  currentNum = "";
  operator = this.getAttribute("data-ops");
}

function displayResult() {
  previousNum = parseFloat(previousNum);
  currentNum = parseFloat(currentNum);

  switch (operator) {
    case "plus":
      resultNum = previousNum + currentNum;
      break;

    case "minus":
      resultNum = previousNum - currentNum;
      break;

    case "times":
      resultNum = previousNum * currentNum;
      break;

    case "divided by":
      resultNum = previousNum / currentNum;
      break;

    default:
      resultNum = currentNum;
  }

  viewer.innerHTML = resultNum;
}

function clear() {
  currentNum = "";
  previousNum = "";
  resultNum = "";
  operator = "";
  viewer.innerHTML = "0";
}

// Add click event to numbers
for (var i = 0, l = nums.length; i < l; i++) {
  nums[i].onclick = setNum;
}

// Add click event to operators
for (var i = 0, l = ops.length; i < l; i++) {
  ops[i].onclick = operationSelection;
}

// Add click event to clear
document.querySelector("#clear").onclick = clear;

// Add click event to equal sign
equals.onclick = displayResult;
