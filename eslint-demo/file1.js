// file1.js

let name = "John"; // Missing semicolon

function greet() {
  console.log("Hello, " + name); // Missing semicolon and string concatenation issue
  //eslint-disable-next-line
  let unusedVar = 10; // Unused variable
}

greet();
