// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//MY SOLUTION
function grow(x){
  let answer = 1;
  for (let i = 0; i < x.length; i++){
    answer *= x[i];
  }
  return answer;
}

//OTHER SOLUTIONS

const grow=x=> x.reduce((a,b) => a*b);

function grow(x){
  return x.reduce((a, b)=> a * b,1);
}

const grow = (nums) => nums.reduce((product, num) => product * num, 1);

