// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

//MY SOLUTION
function invert(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++){
      newArray.push(array[i] * -1);
  }
   return newArray;
}

// OTHER SOLUTIONS NOT MINE
const invert = array => array.map(num => -num);

function invert(array) {
  let newArr = [];
  for(let i = 0; i < array.length; i++){
    newArr.push(-array[i]);
  }
   return newArr;
}

function invert(array) {
  for(let i=0; i<array.length; i++){
    array[i] *= -1;
  }
   return array;
}