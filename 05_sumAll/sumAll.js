/*let finalSum = 0;
const sumAll = function (start, end) {
  while (start <= end) {
    console.log(`finalSum ${finalSum}`);
    console.log(`start ${start}`);
    finalSum += start;
    start++;
  }
  console.log(finalSum);
};

sumAll(1, 4);*/
/*function checkNumber(firstNumber,secondNumber) {
    if (firstNumber < 0 || secondNumber < 0){
      return false;
  }
  }*/

const sumAll = function (start, end) {
  let finalSum = 0;
  if (start < 0 || end < 0) return "ERROR";
  if (Number.isInteger(start) == false || Number.isInteger(end) == false)
    return "ERROR";
  if (start > end) {
    const temp = start;
    start = end;
    end = temp;
  }

  for (i = start; i <= end; i++) {
    finalSum += i;
  }
  return finalSum;
};

sumAll(1, 123);

// Do not edit below this line
module.exports = sumAll;
