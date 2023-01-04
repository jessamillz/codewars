//MY SOLUTIONS
//SUBMITTED
const check = (a,x) => a.includes(x); //highest ranked best practices!
//OTHER
function check(a, x) {
  return a.includes(x);
}

//OTHER SOLUTIONS NOT MINE
function check(a,x){
  return a.indexOf(x) > -1 ? true : false;
};

const check = (arr, x) => arr.some(item => item == x);