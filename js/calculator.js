export class Calculator {
  constructor() {
  }

  ageCalculator(born) {
    let currentDate = Date.now();
    console.log(Date.now());
    let elapsed = Math.floor((currentDate - born.getTime()) / 1000);
    return elapsed;
  }

}
//   currentAge() {
//     let calculator = new Calculator(this.birthDate);
//     let currentTime = $('#time').text(moment());
//     let output = parseInt(currentTime - calculator);
//   }
// }

// function ageCalculator(dob) {
//   var timeStamp = Math.floor(Date.now()/ 1000);//should provide timestamp in seconds
//   var date = new Date(timestamp);
//   var seconds = date.getTime() / 1000;
//
// }
