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

function operator() {
  previousNum = currentNum;
  currentNum = "";
  operator = this.getAttribute("data-ops");
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
  ops[i].onclick = operator;
}

// Add click event to clear
document.querySelector("#clear").onclick = clear;
