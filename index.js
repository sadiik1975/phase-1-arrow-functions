// index.js

// Function expression to add two numbers
const add = function(a, b) {
    return a + b;
  };
  
  // Function expression to subtract two numbers
  const subtract = function(a, b) {
    return a - b;
  };
  
  // Arrow function to multiply two numbers
  const multiply = (a, b) => a * b;
  
  // Arrow function to divide two numbers
  const divide = (a, b) => {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  };
  
  // Arrow function to square each element in an array
  const square = x => x ** 2;
  const squareArray = arr => arr.map(square);
  
  // Export functions for testing
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    square,
    squareArray
  };
  