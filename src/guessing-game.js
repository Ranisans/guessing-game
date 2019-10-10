class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.maxNumber = max;
    this.minNumber = min;
  }

  guess() {
    this.middle = Math.round((this.maxNumber + this.minNumber) / 2);
    console.log(
      "TCL: GuessingGame -> guess -> this.currentNumber",
      this.middle
    );
    return this.middle;
  }

  lower() {
    this.maxNumber = this.middle;
  }

  greater() {
    this.minNumber = this.middle;
  }
}

module.exports = GuessingGame;
