// Calculator elements
var viewer_accumulator = document.querySelector("#accumulator"),
  viewer_result = document.querySelector("#result"),
  calc_nums = document.querySelectorAll(".num"), // List of numbers
  calc_ops = document.querySelectorAll(".ops"), // List of operators
  calc_equals = document.getElementById("equals"), // Equal button
  calc_clear = document.getElementById("clear"); // Clear button

//Variables
var previousNum = "",
  currentNum = "",
  resultNum;

// Clicking on number for selecting them
function setNum() {
  currentNum += this.getAttribute("data-num"); // Add digits to previous number
  result.innerHTML = currentNum; // Display current number
}

  viewer.innerHTML = currentNum; // Display current number
}

function operationSelection() {
  previousNum += currentNum;
  currentNum = "";
  viewer_accumulator.innerHTML = previousNum;
  viewer_result.innerHTML = resultNum;
}

function clear() {
  currentNum = "";
  previousNum = "";
  resultNum = "";
  operator = "";
  viewer_accumulator.innerHTML = "";
  viewer_result.innerHTML = "0";
}

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

// Add click event to equal sign
calc_equals.onclick = calculateResult;
