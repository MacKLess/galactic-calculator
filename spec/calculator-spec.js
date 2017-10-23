import { Calculator } from './../js/calculator.js';
import { Planet } from './../js/planet.js';


describe('Calculator', function() {

  let currentDate;
  let dob;
  let calculator;

  beforeEach(function() {
    currentDate = new Date ("October 13 2017");
    dob = new Date ("October 13 2014");
    calculator = new Calculator(currentDate);
  });

  it('should return the difference between inputDate and currentDate in seconds', function() {
    expect(calculator.ageCalculator(dob)).toEqual(94694400);
  });

  it('should return a negative number if the user enters a future date erroneously for their birthdate', function() {
    let dob = new Date ("October 13 2020");
    expect(calculator.ageCalculator(dob)).toEqual(-94694400);
  });
});

describe('Planet', function() {

  let currentDate;
  let dob;
  let calculator;
  let currentAge;
  let finalAge;
  let planet;

  beforeEach(function() {
    currentDate = new Date ("October 13 2017");
    dob = new Date ("October 13 2014");
    calculator = new Calculator(currentDate);
    currentAge = calculator.ageCalculator(dob);
    finalAge = (82 * 31536000);
    planet = new Planet(currentAge, finalAge);
  });

  describe('lifeOnEarth', function() {
    it('should return the seconds left for the user life based on birthdate input and age expectancy input', function() {
      expect(planet.lifeOnEarth()).toEqual(79.00.toFixed(2));
    });
  });

  describe('convertMercury', function() {
    it('should return the age of the user in years on Mercury', function() {
      expect(planet.convertMercury()).toEqual(12.52.toFixed(2));
    });
  });

  describe('lifeOnMercury', function() {
    it('should return the seconds left for the user life based on birthdate input and age expectancy input on the planet Mercury', function() {
      expect(planet.lifeOnMercury()).toEqual(329.42.toFixed(2));
    });
  });

  describe('convertVenus', function() {
    it('should return the age of the user in years on Venus', function() {
      expect(planet.convertVenus()).toEqual(4.83.toFixed(2));
    });
  });

  describe('lifeOnVenus', function() {
    it('should return the seconds left for the user life based on birthdate input and age expectancy input on the planet Venus', function() {
      expect(planet.lifeOnVenus()).toEqual(127.19.toFixed(2));
    });
  });

  describe('convertMars', function() {
    it('should return the age of the user in years on Mars', function() {
      expect(planet.convertMars()).toEqual(1.59.toFixed(2));
    });
  });

  describe('lifeOnMars', function() {
    it('should return the seconds left for the user life based on birthdate input and age expectancy input on the planet Mars', function() {
      expect(planet.lifeOnMars()).toEqual(41.87.toFixed(2));
    });
  });

  describe('convertJupiter', function() {
    it('should return the age of the user in years on Jupiter', function() {
      expect(planet.convertJupiter()).toEqual(0.25.toFixed(2));
    });
  });

  describe('lifeOnJupiter', function() {
    it('should return the seconds left for the user life based on birthdate input and age expectancy input on the planet Jupiter', function() {
      expect(planet.lifeOnJupiter()).toEqual(6.64.toFixed(2));
    });
  });

});
