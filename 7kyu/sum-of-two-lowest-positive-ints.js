// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//* START OF MY SOLUTION *//
function sumTwoSmallestNumbers(numbers) {  
    //sorting in order from lowest to highest
    let sorted = numbers.sort(compareNumbers);
    //remove first number which is now smallest and assign to variable
    const smallest = sorted.shift();
    //remove first number which is now smallest in array and assign to variable
    const secondSmallest = sorted.shift();
    return smallest + secondSmallest;
}
//compare numbers, return smallest number
function compareNumbers(a, b) {
  return a - b;
}

//* END OF MY SOLUTION *//


//* OTHER SOLUTIONS *//
//basically my solution in a much shorter form
function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
};


function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a - b);
    return numbers[0] + numbers[1];
  };


function sumTwoSmallestNumbers(numbers) {  
    var [ a, b ] = numbers.sort((a, b) => a - b)
    return a + b
}

function sumTwoSmallestNumbers(numbers) {  
    var min = Number.MAX_SAFE_INTEGER;
    var secondMin = Number.MAX_SAFE_INTEGER;
    
    var n;
    for (i = 0; i < numbers.length; i++) {
      n = numbers[i];
        if(n < min) {
          secondMin = min;
        min = n;
      } else if( n < secondMin ) {
          secondMin = n;
      }
    }
    
    return min + secondMin;
}

