import { Calculator } from './../js/calculator.js';
import { Planet } from './../js/planet.js';

$(document).ready(function() {
  $('.dob').submit(function(event) {
    event.preventDefault();
    //clear UI
    $('#output').text("");
    $('#mercuryAge').text("");
    $('#venusAge').text("");
    $('#marsAge').text("");
    $('#jupiterAge').text("");

    $('#earthLeft').text("");
    $('#mercuryLeft').text("");
    $('#venusLeft').text("");
    $('#marsLeft').text("");
    $('#jupiterLeft').text("");

    $('#error').text("");

    const born = new Date($('#born').val());
    let yourAge = new Calculator();
    let currentAge = yourAge.ageCalculator(born);
    let modelPlanet = new Planet(currentAge);
    const finalAge = (parseInt($('#death').val())) * 31536000;
    let deathPlanet = new Planet(currentAge, finalAge);
    $('#output').text(`You are ${currentAge} seconds old!`);
    //output for current age on different planets
    $('#mercuryAge').text(`You are ${modelPlanet.convertMercury()} years old on Mercury!`);
    $('#venusAge').text(`You are ${modelPlanet.convertVenus()} years old on Venus!`);
    $('#marsAge').text(`You are ${modelPlanet.convertMars()} years old on Mars!`);
    $('#jupiterAge').text(`You are ${modelPlanet.convertJupiter()} years old on Jupiter!`);
    //output on anticipated life expectancy
    if (finalAge < currentAge) {
      $('#error').text(`Wowee! You are older than you expected! Keep drinking those health shakes!`);
    } else {
      $('#earthLeft').text(`Hail, Earthling! You have ${deathPlanet.lifeOnEarth()} years left to live! Act fast!`);
      $('#mercuryLeft').text(`Hello, Mercurian! You have ${deathPlanet.lifeOnMercury()} years left to live! Act fast!`);
      $('#venusLeft').text(`Salud, Venusian! You have ${deathPlanet.lifeOnVenus()} years left to live! Act fast!`);
      $('#marsLeft').text(`Howdy, Martian! You have ${deathPlanet.lifeOnMars()} years left to live! Act fast!`);
      $('#jupiterLeft').text(`Hiyah Jovian! You have ${deathPlanet.lifeOnJupiter()} years left to live! Act fast!`);
    }
  });
});
