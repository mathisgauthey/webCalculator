const Calculator = require("./Calculator");

let calculator;

beforeEach(() => {
  calculator = new Calculator();
});

test("clear should set accumulatorNum to empty string", () => {
  // Given
  calculator.accumulatorNum = "66";

  // When
  calculator.clear();

  // Then
  expect(calculator.accumulatorNum).toBe("");
});

test("clear should set currentNum to 0", () => {
  // Given
  calculator.currentNum = "66";

  // When
  calculator.clear();

  // Then
  expect(calculator.currentNum).toBe("0");
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

test("appendNum should append a . to current number if current number does not contain a .", () => {
  // Given
  calculator.currentNum = "0";

  // When
  calculator.appendNum(".");

  // Then
  expect(calculator.currentNum).toBe("0.");
});

test("appendNum should not append a . to current number if current number contains a .", () => {
  // Given
  calculator.currentNum = "0.";

  // When
  calculator.appendNum(".");

  // Then
  expect(calculator.currentNum).toBe("0.");
});

test("operatorSelect should append an operator to previous number", () => {
  // Given
  calculator.accumulatorNum = "";
  calculator.currentNum = "66";

  // When
  calculator.operatorSelect("+");

  // Then
  expect(calculator.accumulatorNum).toBe("66+");
  expect(calculator.currentNum).toBe("");
});

test("operatorSelect should not append an operator to previous number if previous number already ends with an operator", () => {
  // Given
  calculator.accumulatorNum = "66+";
  calculator.currentNum = "";

  // When
  calculator.operatorSelect("+");

  // Then
  expect(calculator.accumulatorNum).toBe("66+");
  expect(calculator.currentNum).toBe("");
});

test("operatorSelect should switch operator if previous number already ends with an operator and current number is empty", () => {
  // Given
  calculator.accumulatorNum = "66+";
  calculator.currentNum = "";

  // When
  calculator.operatorSelect("-");

  // Then
  expect(calculator.accumulatorNum).toBe("66-");
  expect(calculator.currentNum).toBe("");
});
