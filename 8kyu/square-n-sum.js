//* DESCRPTION *//
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 



//* START OF MY SOLUTION *//
function squareSum(numbers){
    return numbers.reduce((a, c) => a + (c ** 2), 0);
}

//* END OF MY SOLUTION *//


//* OTHER SOLUTIONS, NOT MINE *//

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
}
  
function squareSum(numbers){
    var sum = 0;
    numbers.forEach(function(n) {
      sum += n * n
    });
    return sum;
}

function squareSum(numbers){
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
      result += (numbers[i] * numbers[i]);
    }
    return result;
}

const squareSum = numbers => numbers.reduce((a, b)=> a + b**2, 0)