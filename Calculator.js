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
    } else if (
      this.accumulatorNum.charAt(this.accumulatorNum.length - 1) === "="
    ) {
      const pattern = /[-+*/]\d+(?=[^-+*/]*$)/;
      let lastOp = this.accumulatorNum.match(pattern);
      console.log(lastOp);
      this.accumulatorNum = this.accumulatorNum.slice(0, -1);
      this.accumulatorNum += lastOp;
      this.currentNum = String(eval(this.accumulatorNum));
      this.accumulatorNum += "=";
    }
  }

  updateViewer() {
    viewer_accumulator.innerHTML = this.accumulatorNum;
    viewer_current.innerHTML = this.currentNum;
  }
}
module.exports = Calculator;
