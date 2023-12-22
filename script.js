math.config({
  number: "BigNumber",
  precision: 16,
  predictable: true,
});

const viewer_accumulator = document.querySelector("#accumulator"), // Viewer for previous number
  viewer_current = document.querySelector("#current"), // Viewer for current number
  calc_clear = document.getElementById("clear"), // Clear button
  calc_clear_entry = document.getElementById("clear_entry"), // Clear entry button
  calc_backspace = document.getElementById("backspace"), // Backspace button
  calc_nums = document.querySelectorAll(".num"), // List of numbers
  calc_ops = document.querySelectorAll(".ops"), // List of operators
  calc_equals = document.getElementById("equals"), // Equal button
  calc_inverse = document.getElementById("inverse"), // Inverse button
  calc_square = document.getElementById("square"), // Square button
  calc_sqrt = document.getElementById("sqrt"), // Square root button
  calc_percentage = document.getElementById("percentage"), // Percentage button
  calc_plus_minus = document.getElementById("plus_minus"); // Plus minus button

let calculator = new Calculator();
calculator.updateViewer();

calc_clear.addEventListener("click", () => {
  calculator.clear();
  calculator.updateViewer();
});

calc_clear_entry.addEventListener("click", () => {
  calculator.clearEntry();
  calculator.updateViewer();
});

calc_backspace.addEventListener("click", () => {
  calculator.backspace();
  calculator.updateViewer();
});

calc_nums.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNum(button.innerText);
    calculator.updateViewer();
  });
});

// Add event listener on keydown
document.addEventListener("keydown", (event) => {
  if (calculator.isNum(event.key)) {
    calculator.appendNum(event.key);
  } else if (calculator.isOperator(event.key)) {
    calculator.operatorSelect(event.key);
  } else if (event.key === "Enter" || event.key === "=") {
    calculator.equals();
  } else if (event.key === "Backspace") {
    calculator.backspace();
  } else if (event.key === "²") {
    calculator.square();
  } else if (event.key === "%") {
    calculator.percentage();
  } else {
    return;
  }
  calculator.updateViewer();
});

calc_ops.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.operatorSelect(button.innerText);
    calculator.updateViewer();
  });
});

calc_inverse.addEventListener("click", () => {
  calculator.inverse();
  calculator.updateViewer();
});

calc_square.addEventListener("click", () => {
  calculator.square();
  calculator.updateViewer();
});

calc_sqrt.addEventListener("click", () => {
  calculator.sqrt();
  calculator.updateViewer();
});

calc_percentage.addEventListener("click", () => {
  calculator.percentage();
  calculator.updateViewer();
});

calc_plus_minus.addEventListener("click", () => {
  calculator.plusMinus();
  calculator.updateViewer();
});

calc_equals.addEventListener("click", () => {
  calculator.equals();
  calculator.updateViewer();
});
