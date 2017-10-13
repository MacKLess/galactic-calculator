import { Calculator } from './../js/calculator.js';

$(document).ready(function() {
  $('#dob').submit(function(event) {
    event.preventDefault();
    var born = parseInt($('#born').value());
    console.log(born)
    var yourAge = new Calculator();
    var output = yourAge.ageCalculator(born);
    console.log(output);
    output.text(function(elapsed) {
      $('#output').append(elapsed);
      console.log(elapsed);
    });

    // var Bdate = document.getElementById('bday').value;
    // var Bday = +new Date(Bdate);
    // var result = "Your birthday is: ";
    // result += ". You are " + ~~((Date.now() - Bday) / (31557600000));
    // var theBday = document.getElementById('resultBday');
    // theBday.innerHTML = result;


// alternate output:
//       $('#output').text("You are " + elapsed + " seconds old.");

  //   let birthDate = parseInt($('#born').val().getSeconds());
  //   $('#time').text(moment());
  });
});
