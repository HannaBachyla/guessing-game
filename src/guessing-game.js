class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
      }
      guess() {
        let a = Math.round(this.max / 2 - this.min / 2 + this.min);
        return a;
      }
      lower() {
        this.max = Math.round(this.max / 2 - this.min / 2 + this.min);
        this.guess()
      }
      greater() {
        this.min = Math.round(this.max / 2 - this.min / 2 + this.min);
        this.guess()
      }
}

module.exports = GuessingGame;
