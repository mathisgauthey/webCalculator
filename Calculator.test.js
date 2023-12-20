const Calculator = require("./Calculator");

let calculator;

beforeEach(() => {
  calculator = new Calculator();
});

test("appendNum should append a number to currentNum string", () => {
  // Given
  calculator.currentNum = "66";

  // When
  calculator.appendNum("6");

  // Then
  expect(calculator.currentNum).toBe("666");
});

test("appendNum should replace 0 with the number selected", () => {
  // Given
  calculator.currentNum = "0";

  // When
  calculator.appendNum("6");

  // Then
  expect(calculator.currentNum).toBe("6");
});
