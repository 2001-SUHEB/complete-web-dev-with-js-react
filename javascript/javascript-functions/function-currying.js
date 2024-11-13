// This JavaScript file demonstrates the use of function binding with `bind()`
// and the concept of function currying to create customized functions.

// The `multiply` function takes two parameters, `a` and `b`, and logs the product of `a * b`.
function multiply(a, b) {
  console.log(a * b);
}

// Using `bind` to partially apply the `multiply` function:
// Here, `multiplyByTwo` is created by binding the first argument `a` to 2.
// This creates a new function that only requires `b` as input to complete the multiplication.
const multiplyByTwo = multiply.bind(this, 2);

multiplyByTwo(5); // Output: 10 (2 * 5)
multiplyByTwo(10); // Output: 20 (2 * 10)
multiplyByTwo(2); // Output: 4  (2 * 2)

// Creating another function `multiplyByThree` by binding `a` to 3.
const multiplyByThree = multiply.bind(this, 3);

multiplyByThree(2); // Output: 6  (3 * 2)
multiplyByThree(3); // Output: 9  (3 * 3)
multiplyByThree(4); // Output: 12 (3 * 4)

// Function currying example using `add`:
// The `add` function takes one parameter `a` and returns another function
// that takes a parameter `b` and logs the result of `a + b` when called.
function add(a) {
  return function (b) {
    console.log(a + b);
  };
}

// Using the curried `add` function:
add(3)(4); // Output: 7 (3 + 4)

// Another example of currying with the `area` function:
// The `area` function takes one parameter `length` and returns another function
// that takes `breadth` as an argument and logs the area (length * breadth).
function area(length) {
  return function (breadth) {
    console.log(length * breadth);
  };
}

// Using the curried `area` function:
area(4)(4); // Output: 16 (4 * 4)

// Summary:
// - `bind()` allows us to create a new function with preset arguments,
//   which is useful for creating specific variations of a function.
// - Currying breaks down a function into smaller functions, each taking a single argument.
//   This enables flexibility and reusability in functional programming.
