/*const leapYears = function (year) {
  let resultDividByFour = year / 4;
  let resultDividByOneHundred = year / 100;
  let resultDividByFourHundred = year / 400;

  if (year < 0) return false;
  if (Number.isInteger(resultDividByFourHundred) == true) return true;
  if (
    Number.isInteger(resultDividByFour) == true &&
    Number.isInteger(resultDividByOneHundred) == false
  )
    return true;
  if (
    Number.isInteger(resultDividByFour) == false ||
    Number.isInteger(resultDividByOneHundred) == true
  )
    return false;
};

leapYears(1900);*/

const leapYears = function (year) {
  const isYearDivisibleByFour = year % 4 === 0;
  const isYearDivisibleByOneHundred = year % 100 === 0;
  const isYearDivisibleByFourHundred = year % 400 === 0;

  if (
    (isYearDivisibleByFour && !isYearDivisibleByOneHundred) ||
    isYearDivisibleByFourHundred
  ) {
    return true;
  } else {
    return false;
  }
};

leapYears(1000);

// Do not edit below this line
module.exports = leapYears;
