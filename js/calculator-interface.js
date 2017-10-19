import { Calculator } from './../js/calculator.js';
import { Planet } from './../js/planet.js';

$(document).ready(function() {
  $('.dob').submit(function(event) {
    event.preventDefault();
    const born = new Date($('#born').val());
    let yourAge = new Calculator();
    let currentAge = yourAge.ageCalculator(born);
    let modelPlanet = new Planet(currentAge);
    const finalAge = (parseInt($('#death').val())) * 31536000;
    console.log(finalAge);
    let deathPlanet = new Planet(currentAge, finalAge);
    //output for current age on different planets
    $('#output').append(`You are ${currentAge} seconds old!`);
    $('#mercuryAge').append(`You are ${modelPlanet.convertMercury()} years old on Mercury!`);
    console.log(modelPlanet.convertMercury());
    $('#venusAge').append(`You are ${modelPlanet.convertVenus()} years old on Venus!`);
    $('#marsAge').append(`You are ${modelPlanet.convertMars()} years old on Mars!`);
    $('#jupiterAge').append(`You are ${modelPlanet.convertJupiter()} years old on Jupiter!`);
    //output on anticipated life expectancy
    $('#earthLeft').append(`Hail, Earthling! You have ${deathPlanet.lifeOnEarth()} years left to live! Act fast!`);
    $('#mercuryLeft').append(`Hello, Mercurian! You have ${deathPlanet.lifeOnMercury()} years left to live! Act fast!`);
    $('#venusLeft').append(`Salud, Venusian! You have ${deathPlanet.lifeOnVenus()} years left to live! Act fast!`);
    $('#marsLeft').append(`Howdy, Martian! You have ${deathPlanet.lifeOnMars()} years left to live! Act fast!`);
    $('#jupiterLeft').append(`Hiyah Jovian! You have ${deathPlanet.lifeOnJupiter()} years left to live! Act fast!`);
  });

});
