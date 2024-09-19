const convertToCelsius = function(tempFahrenheit) {
  /*
  Takes a number input and converts from F to C, rounded to one decimal.
  Formula: C = (F-32)*5/9 
  */

 tempCelsius = (tempFahrenheit-32)*5/9
 return Math.round(tempCelsius*10)/10
};

const convertToFahrenheit = function(tempCelsius) {
  /*
  Takes a number input and converts from F to C, rounded to one decimal.
  Formula: (9/5)*C+32
  */

  tempFahrenheit = (9/5)*tempCelsius+32
  return Math.round(tempFahrenheit*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
