import { Calculator } from './../js/calculator.js';

describe('Calculator', function() {

  it('should return the difference between inputDate and currentDate in seconds', function() {
    var currentDate = new Date ("October 13 2017");
    var dob = new Date ("October 13 2014");
    var calculator = new Calculator(currentDate);
    expect(calculator.ageCalculator(dob)).toEqual(94694400);
  });

  it('should return a negative number if the user enters a future date erroneously for their birthdate', function() {
    var currentDate = new Date ("October 13 2017");
    var dob = new Date ("October 13 2020");
    var calculator = new Calculator(currentDate);
    expect(calculator.ageCalculator(dob)).toEqual(-94694400);
  });
});
