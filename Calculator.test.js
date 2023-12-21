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

test("clearEntry should clear currentNum to 0 if there is no accumulator", () => {
  // Given
  calculator.accumulatorNum = "";
  calculator.currentNum = "66";

  // When
  calculator.clearEntry();

  // Then
  expect(calculator.currentNum).toBe("0");
});

test("clearEntry should clear currentNum to empty string if there is an accumulator", () => {
  // Given
  calculator.accumulatorNum = "55+";
  calculator.currentNum = "66";

  // When
  calculator.clearEntry();

  // Then
  expect(calculator.currentNum).toBe("");
});

test("backspace should remove the last character of currentNum", () => {
  // Given
  calculator.accumulatorNum = "";
  calculator.currentNum = "66";

  // When
  calculator.backspace();

  // Then
  expect(calculator.currentNum).toBe("6");
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

test("appendNum should reset currentNum after a calculation was done using equals", () => {
  // Given
  calculator.accumulatorNum = "66+4=";
  calculator.currentNum = "70";

  // When
  calculator.appendNum("5");

  // Then
  expect(calculator.currentNum).toBe("5");
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
});

test("operatorSelect should erase existing current number if previous number already ends with an operator and current number is not empty", () => {
  // Given
  calculator.accumulatorNum = "";
  calculator.currentNum = "55";

  // When
  calculator.operatorSelect("+");

  // Then
  expect(calculator.currentNum).toBe("");
});

test("operatorSelect should permet continuing a calculation after hiting equal button", () => {
  // Given
  calculator.accumulatorNum = "66+5=";
  calculator.currentNum = "71";

  // When
  calculator.operatorSelect("-");

  // Then
  expect(calculator.accumulatorNum).toBe("71-");
});

test("inverse should inverse the current number", () => {
  // Given
  calculator.currentNum = "2";

  // When
  calculator.inverse();

  // Then
  expect(calculator.currentNum).toBe("0.5");
});

test("inverse should not inverse the current number if current number is 0", () => {
  // Given
  calculator.currentNum = "0";

  // When
  calculator.inverse();

  // Then
  expect(calculator.currentNum).toBe("0");
});

test("square should square the current number", () => {
  // Given
  calculator.currentNum = "2";

  // When
  calculator.square();

  // Then
  expect(calculator.currentNum).toBe("4");
});

test("sqrt should square root the current number", () => {
  // Given
  calculator.currentNum = "4";

  // When
  calculator.sqrt();

  // Then
  expect(calculator.currentNum).toBe("2");
});

test("sqrt should now work if current number is negative", () => {
  // Given
  calculator.currentNum = "-4";

  // When
  calculator.sqrt();

  // Then
  expect(calculator.currentNum).toBe("NaN");
});

test("percentage should change the currentNum % to the percentage value of the accumulatorNum current evaluation", () => {
  // Given
  calculator.accumulatorNum = "50+5+";
  calculator.currentNum = "10";

  // When
  calculator.percentage();

  // Then
  expect(calculator.currentNum).toBe("5.5");
});

test("plusMinus should change currentNum as a positive to a negative value", () => {
  // Given
  calculator.currentNum = "6";

  // When
  calculator.plusMinus();

  // Then
  expect(calculator.currentNum).toBe("-6");
});

test("plusMinus should change currentNum as a negative to a positive value", () => {
  // Given
  calculator.currentNum = "-9";

  // When
  calculator.plusMinus();

  // Then
  expect(calculator.currentNum).toBe("9");
});

test("equals should calculate the result of the operation in accumulatorNum and put it in currentNum", () => {
  // Given
  calculator.accumulatorNum = "66+";
  calculator.currentNum = "4";

  // When
  calculator.equals();

  // Then
  expect(calculator.currentNum).toBe("70");
});

test("equals should append = to accumulatorNum", () => {
  // Given
  calculator.accumulatorNum = "66+";
  calculator.currentNum = "4";

  // When
  calculator.equals();

  // Then
  expect(calculator.accumulatorNum).toBe("66+4=");
});

test("equals should not work if accumulatorNum ends with an operator and current number is empty", () => {
  // Given
  calculator.accumulatorNum = "66+5+";
  calculator.currentNum = "";

  // When
  calculator.equals();

  // Then
  expect(calculator.accumulatorNum).toBe("66+5+");
  expect(calculator.currentNum).toBe("");
});

test("spamming equals should keep executing the last currentNum action with accumulatorNum last operator", () => {
  // Given
  calculator.accumulatorNum = "5+";
  calculator.currentNum = "5";

  // When
  calculator.equals();
  calculator.equals();
  calculator.equals();

  // Then
  expect(calculator.accumulatorNum).toBe("5+5+5+5=");
  expect(calculator.currentNum).toBe("20");
});
