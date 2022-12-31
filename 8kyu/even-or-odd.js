// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// My solution
function evenOrOdd(number) {
    if (number%2 == 0){    
    return "Even";
    } else {
    return "Odd";
    }
}

// Other soltions
function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }

const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';
