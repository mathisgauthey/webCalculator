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

  updateViewer() {
    viewer_accumulator.innerHTML = this.accumulatorNum;
    viewer_current.innerHTML = this.currentNum;
  }
}
module.exports = Calculator;
