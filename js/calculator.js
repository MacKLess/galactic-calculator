export class Calculator {
  constructor() {
  }

  ageCalculator(born) {
    let currentDate = Date.now();
    let elapsed = Math.floor((currentDate - born.getTime()) / 1000);
    return elapsed;
  }
}
