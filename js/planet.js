import { Calculator } from './../js/calculator.js';

export class Planet {
  constructor(currentAge, finalAge) {
    this.currentAge = currentAge;
    this.finalAge = finalAge;
  }

  secondsLeft() {
    const secLeft = this.finalAge - this.currentAge;
    return secLeft;
  }


  lifeOnEarth() {
    let earthLeft = (this.secondsLeft() / 31536000).toFixed(2);
    return earthLeft;
  }

  convertMercury() {
    let mercYears = ((this.currentAge * 4.17) / 31536000).toFixed(2);
    return mercYears;
  }

  lifeOnMercury() {
    let mercLeft = ((this.secondsLeft() * 4.17) / 31536000).toFixed(2);
    return mercLeft;
  }

  convertVenus() {
    let venusYears = ((this.currentAge * 1.61) / 31536000).toFixed(2);
    return venusYears;
  }

  lifeOnVenus() {
    let venusLeft = ((this.secondsLeft() * 1.61) / 31536000).toFixed(2);
    return venusLeft;
  }

  convertMars() {
    let marsYears = ((this.currentAge * 0.53) / 31536000).toFixed(2);
    return marsYears;
  }

  lifeOnMars() {
    let marsLeft = ((this.secondsLeft() * 0.53) / 31536000).toFixed(2);
    return marsLeft;
  }

  convertJupiter() {
    let jupYears = ((this.currentAge * 0.084) / 31536000).toFixed(2);
    return jupYears;
  }

  lifeOnJupiter() {
    let jupLeft = ((this.secondsLeft() * 0.084) / 31536000).toFixed(2);
    return jupLeft;
  }
}
