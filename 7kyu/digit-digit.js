//* DESCRPTION *//
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!



//* START OF MY SOLUTION *//
//function takes in a number
//split number into individual digits
//square each of those digits
//join those digits back together


function squareDigits(num){
    let numArr = num.toString().split('');
    let answer = [];
    numArr.forEach(digit => {
        Number(digit);
        digit = digit ** 2;
        answer.push(digit);
    });
    return Number(answer.join(''));
    // console.log(Number(answer.join('')));
}

// squareDigits(2112);


//* END OF MY SOLUTION *//


//* OTHER SOLUTIONS, NOT MINE *//

function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
}

function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
}

function squareDigits(num){
    var array = num.toString().split('').map( function(int) {
      var i = parseInt(int);
      return i * i;
    });
    
    return parseInt(array.join(""));
}

function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};