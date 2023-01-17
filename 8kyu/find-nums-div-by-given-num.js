// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

// MY SOLUTION
function divisibleBy(numbers, divisor){
  let newArr = []
  for (let i=0; i<numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      newArr.push(numbers[i])}
  } return newArr
}

// OTHER SOLUTIONS NOT MINE
function divisibleBy(numbers, divisor) {
  return numbers.filter(n => n % divisor === 0)
}

const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));

function divisibleBy(numbers, divisor){
  return numbers.filter(function(number){
    return number % divisor === 0;
  })
}