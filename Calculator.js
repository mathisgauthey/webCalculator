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

  clearEntry() {
    if (this.accumulatorNum === "") {
      this.currentNum = "0";
    } else {
      this.currentNum = "";
    }
  }

  backspace() {
    if (this.currentNum === "0") {
      return;
    } else {
      this.currentNum = this.currentNum.slice(0, -1);
    }
  }

  appendNum(num) {
    // If the currentNum is 0 and num is not a dot, replace it with num
    if (this.currentNum === "0" && num !== ".") {
      this.currentNum = num;
    }
    // If num is a dot and currentNum already contains a dot, do nothing
    else if (num === "." && this.currentNum.includes(".")) {
      return;
    }
    // If an equals() was just called, clear the accumulatorNum and replace currentNum with num
    else if (
      this.accumulatorNum.charAt(this.accumulatorNum.length - 1) === "="
    ) {
      if (num !== ".") {
        this.accumulatorNum = "";
        this.currentNum = num;
      } else {
        return;
      }
    }
    // In every other cases, append num to currentNum
    else {
      this.currentNum += num;
    }
  }

  isOperator(char) {
    const operators = ["+", "-", "*", "/"];
    return operators.includes(char); // True if char is an operator
  }

  isNum(char) {
    const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    return nums.includes(char); // True if char is a number
  }

  operatorSelect(operator) {
    // If the last character of accumulatorNum is an operator and currentNum is empty, replace it with the new operator
    if (
      this.isOperator(
        this.accumulatorNum.charAt(this.accumulatorNum.length - 1)
      ) &&
      this.currentNum === ""
    ) {
      this.accumulatorNum = this.accumulatorNum.slice(0, -1);
    }
    // If the last character of accumulatorNum is an equal, clear it so that
    // it will be replaced by the result and the new operator
    if (this.accumulatorNum.charAt(this.accumulatorNum.length - 1) === "=") {
      this.accumulatorNum = "";
    }
    this.accumulatorNum += this.currentNum;
    this.accumulatorNum += operator;
    this.currentNum = "";
  }

  inverse() {
    if (this.currentNum !== "0") {
      this.currentNum = String(1 / parseFloat(this.currentNum));
    }
  }

  square() {
    this.currentNum = String(this.currentNum * this.currentNum);
  }

  sqrt() {
    this.currentNum = String(Math.sqrt(this.currentNum));
  }

  percentage() {
    if (
      this.isOperator(
        this.accumulatorNum.charAt(this.accumulatorNum.length - 1)
      )
    ) {
      let operator = this.accumulatorNum.charAt(this.accumulatorNum.length - 1);
      this.accumulatorNum = this.accumulatorNum.slice(0, -1);
      this.currentNum = String(
        (parseFloat(this.currentNum) / 100) * eval(this.accumulatorNum)
      );
      this.accumulatorNum += operator;
    }
  }

  plusMinus() {
    this.currentNum = String(-1 * parseFloat(this.currentNum));
  }

  equals() {
    if (
      this.isOperator(
        this.accumulatorNum.charAt(this.accumulatorNum.length - 1)
      ) &&
      this.currentNum !== ""
    ) {
      this.accumulatorNum += this.currentNum;
      this.currentNum = String(eval(this.accumulatorNum));
      this.accumulatorNum += "=";
    }
    // Else, if the last character of accumulatorNum is an equal, reperform the last operation another time
    else if (
      this.accumulatorNum.charAt(this.accumulatorNum.length - 1) === "="
    ) {
      const pattern = /[-+*/]\d+(?=[^-+*/]*$)/;
      let lastOp = this.accumulatorNum.match(pattern);
      this.accumulatorNum = this.currentNum;
      this.accumulatorNum += lastOp;
      this.currentNum = String(eval(this.accumulatorNum));
      this.accumulatorNum += "=";
    }
  }

  updateViewer() {
    viewer_accumulator.innerText = this.accumulatorNum;
    viewer_current.innerText = this.currentNum;
  }
}
module.exports = Calculator;
