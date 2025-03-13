const reverseString = function(reverseString) {
    let splittedChars = reverseString.split("");
    reverseString = splittedChars.reverse();
    return reverseString.join("");
};
reverseString('hello') 

// Do not edit below this line
module.exports = reverseString;


