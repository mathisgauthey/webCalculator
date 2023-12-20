class Calculator {
  accumulatorNum;
  currentNum;

  constructor(accumulatorNum, currentNum) {
    this.accumulatorNum = accumulatorNum;
    this.currentNum = currentNum;
    this.clear();
  }

  clear() {
    this.accumulatorNum = "";
    this.currentNum = "0";
  }

  appendNum(num) {
    if (this.currentNum === "0" && num !== ".") {
      this.currentNum = num;
    } else if (num === "." && this.currentNum.includes(".")) {
      return;
    } else {
      this.currentNum += num;
    }
  }

  isOperator(char) {
    const operators = ["+", "-", "*", "/"];
    return operators.includes(char); // True if char is an operator
  }

  operatorSelect(operator) {
    if (
      this.isOperator(
        this.accumulatorNum.charAt(this.accumulatorNum.length - 1)
      ) &&
      this.currentNum === ""
    ) {
      this.accumulatorNum = this.accumulatorNum.slice(0, -1);
    }
    this.accumulatorNum += this.currentNum;
    this.accumulatorNum += operator;
    this.currentNum = "";
  }

  updateViewer() {
    viewer_accumulator.innerHTML = this.accumulatorNum;
    viewer_current.innerHTML = this.currentNum;
  }
}
module.exports = Calculator;
