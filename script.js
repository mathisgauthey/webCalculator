const viewer_accumulator = document.querySelector("#accumulator"), // Viewer for previous number
  viewer_current = document.querySelector("#current"), // Viewer for current number
  calc_clear = document.getElementById("clear"), // Clear button
  calc_nums = document.querySelectorAll(".num"); // List of numbers

// calc_ops = document.querySelectorAll(".ops"), // List of operators
// calc_equals = document.getElementById("equals"), // Equal button
// calc_clear_entry = document.getElementById("clear_entry"), // Clear entry button
// calc_backspace = document.getElementById("backspace"), // Backspace button
// calc_inverse = document.getElementById("inverse"), // Inverse button
// calc_square = document.getElementById("square"), // Square button
// calc_sqrt = document.getElementById("sqrt"), // Square root button
// calc_percentage = document.getElementById("percentage"), // Percentage button
// calc_plus_minus = document.getElementById("plus_minus"); // Plus minus button

let calculator = new Calculator();

calc_clear.addEventListener("click", () => {
  calculator.clear();
  calculator.updateViewer();
});

calc_nums.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNum(button.innerHTML);
    calculator.updateViewer();
  });
});
