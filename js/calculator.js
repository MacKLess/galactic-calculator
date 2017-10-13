export class Calculator {
  constructor(birthDate) {
    this.birthDate = birthDate;
  }

  ageCalculator(born) {
    let calculator = new Calculator(this.birthDate);
    let currentDate = Date.now();

    let dob = $('#born').val();
    let elapsed = dob - currentDate;
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
