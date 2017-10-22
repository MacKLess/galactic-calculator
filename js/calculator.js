export class Calculator {
  constructor(currentDate) {
  this.currentDate = currentDate || Date.now();
  }

  ageCalculator(born) {
    let elapsed = Math.floor((this.currentDate - born.getTime()) / 1000);
    return elapsed;
  }
}
