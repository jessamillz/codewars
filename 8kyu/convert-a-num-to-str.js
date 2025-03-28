// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"


//* START OF MY SOLUTION *//
function numberToString(num) {
  return num.toString();
}
//* END OF MY SOLUTION *//

//* OTHER SOLUTIONS *//
function numberToString(num) {
  // Return a string of the number here!
  return String(num);
}

function numberToString(num) {
  return ''+num;
}

const numberToString = num => `${num}`;

numberToString = String;