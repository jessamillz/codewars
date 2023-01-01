// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//MY SUBMITTED SOLUTION
function sumMix(x){
  sum = 0;
  for (i = 0; i < x.length; i++) {
      sum += +x[i]; //+(unary operator) before operand converts to a number.
  }
  return sum;
}
//MY ALTERNATE SOLUTION
function sumMix(x){
  sum = 0;
  for (i = 0; i < x.length; i++) {
    if (typeof x[i] === "number"){
      sum += x[i];
    } else {
      sum += +x[i];
    }  
  }
  return sum;
}

//OTHER SOLUTIONS, NOT MINE
function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}

function sumMix(x){
  var somme = 0;
  for (i = 0; i<x.length; i++) {
    somme += Number(x[i]);
  }
  return somme;
}