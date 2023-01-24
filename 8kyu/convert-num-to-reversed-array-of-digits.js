// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

//MY SOLUTION
function digitize(n) {
    newStr = n.toString().split("").reverse();
    return newStr.map(Number);
}

//OTHER SOLUTIONS NOT MINE
function digitize(n) {
    return String(n).split('').map(Number).reverse()
}

function digitize(n) {
    return Array.from(String(n), Number).reverse();
}

function digitize(n) {
    return String(n).split('').reverse().map(Number)
}

function digitize(n) {
    return n.toString().split("").reverse().map(Number);
}