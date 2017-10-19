import { Calculator } from './../js/calculator.js';
import { Planet } from './../js/planet.js';

$(document).ready(function() {
  $('.dob').submit(function(event) {
    event.preventDefault();
    const born = new Date($('#born').val());
    console.log(born);
    let yourAge = new Calculator();
    let currentAge = yourAge.ageCalculator(born);
    let modelPlanet = new Planet(currentAge);
    console.log(output);
      $('#output').append(`You are ${currentAge} seconds old!`);
      $('#mercuryAge').append(`You are ${modelPlanet.convertMercury()} years old on Mercury!`);
      $('#venusAge').append(`You are ${modelPlanet.convertVenus()} years old on Venus!`);
      $('#marsAge').append(`You are ${modelPlanet.convertMars()} years old on Mars!`);
      $('#jupiterAge').append(`You are ${modelPlanet.convertJupiter()} years old on Jupiter!`);
  });

  $('.dod').click(function(event) {
      const finalAge = (parseInt($('#deathDate').val())) * 31536000;
      let deathPlanet = new Planet(currentAge, finalAge);
      let currentAge = yourAge.ageCalculator(born);
      //insert function of finalAge - currentAge and convert to years
      console.log(finalAge);
      $('#earthLeft').append(`You have ${deathPlanet.lifeOnEarth()} years left to live! Act fast!`);
      $('#mercLeft').append(`You have ${deathPlanet.lifeOnMercury()} years left to live! Act fast!`);
      $('#venusLeft').append(`You have ${deathPlanet.lifeOnVenus()} years left to live! Act fast!`);
      $('#marsLeft').append(`You have ${deathPlanet.lifeOnMars()} years left to live! Act fast!`);
      $('#jupLeft').append(`You have ${deathPlanet.lifeOnJupiter()} years left to live! Act fast!`);
  });

});
