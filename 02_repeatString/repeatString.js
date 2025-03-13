const repeatString = function(string,num) {
    if ( num < 0) return("ERROR");
    let i = 0;
    let stringRepeat = '';
    while ( i < num){
        
       stringRepeat+=string;
        i++;
    }
    return(stringRepeat);
    };
    
    repeatString('hey', -3)

// Do not edit below this line
module.exports = repeatString;
