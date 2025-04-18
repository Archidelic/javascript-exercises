const convertToCelsius = function (tempFahrenheit) {
  //Celsius = (Fahrenheit - 32) / 1.8
  const celsiusConverted = (tempFahrenheit - 32) / 1.8;
  const celsiusRounded = Math.round(celsiusConverted * 10) / 10;
  return celsiusRounded;
};

const convertToFahrenheit = function (tempCelsius) {
  //Fahrenheit = (Celsius * 1.8) + 32
  const farhrenheitConverted = tempCelsius * 1.8 + 32;
  const farhrenheitRounded = Math.round(farhrenheitConverted * 10) / 10;
  return farhrenheitRounded;
};

convertToCelsius(78, 500008);
convertToFahrenheit(30);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
