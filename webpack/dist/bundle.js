/******/ (() => { // webpackBootstrap
// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Function to divide two numbers
function divide(a, b) {
  if (b === 0) {
    return 'Error: Division by zero';
  }
  return a / b;
}

// Function to concatenate two strings
function concatenate(str1, str2) {
  return str1 + str2;
}

// Function to find the maximum number in an array
function findMax(arr) {
  return Math.max(...arr);
}

// Example usage
console.log("Addition: ", add(5, 3)); // 8
console.log("Subtraction: ", subtract(5, 3)); // 2
console.log("Multiplication: ", multiply(5, 3)); // 15
console.log("Division: ", divide(5, 0)); // Error: Division by zero
console.log("Concatenation: ", concatenate("Hello, ", "World!")); // Hello, World!
console.log("Maximum: ", findMax([1, 2, 3, 4, 5])); // 5
/******/ })()
;