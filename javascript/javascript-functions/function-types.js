/*In JavaScript, first-class functions (also known as first-class citizens)
 means that functions are treated as values or objects 
that can be assigned to variables, passed as arguments to other functions, returned 
from other functions, and stored in data structures like arrays or objects.

This is a key feature of JavaScript that allows functions to be highly flexible and dynamic
 in how they're used.*/

//function statement or declaration

function display() {
  console.log("function statement");
}

//function expression

const a = function expression() {
  console.log("function expression");
};

//anonymous function

const b = function () {
  console.log("anonymous function");
};
