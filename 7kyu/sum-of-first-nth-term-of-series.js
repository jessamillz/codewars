// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n){
  //n number of times the loop iterates
  let sum = 0;
  let denom = 4
  
  if (n !== 0) {
    sum = 1;
    if (n !== 1){
      for(let i = 1; i < n; i++){
        sum += (1/denom);
        denom += 3;
      }
    }
  }
  sum = sum.toFixed(2).toString();
  return sum;
}

console.log(SeriesSum(4));


//OTHER SOLUTIONS
function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    
    return s.toFixed(2)
}

function SeriesSum(n) {
    var sum = 0;
    for(var i = 0; i < n; i++) {
      sum += 1 / (3 * i + 1);
    }
    return sum.toFixed(2);
}

function SeriesSum(n)
{
  var dn = 1 + (n-1)*3;
  var sum=0;
  var term;
   for( var i=1; i<=dn; i+=3)
     { 
       term = 1/i;
       sum+=term;
      }
  return sum.toFixed(2);
}