"use strict";

/*
The `this` keyword in JavaScript refers to the context in which a function is invoked.
The value of `this` depends on how the function is called, and can refer to different objects in different scenarios:
1. **Global Context**: In non-strict mode, `this` in the global scope refers to the global object (`window` in browsers).
   In strict mode, `this` in the global scope is `undefined`.
2. **Function Context**: In a regular function, `this` refers to the global object (non-strict) or `undefined` (strict mode).
3. **Object Method**: Inside a method of an object, `this` refers to the object itself.
4. **Arrow Functions**: Arrow functions do not bind their own `this`; instead, they inherit `this` from the surrounding lexical scope.
*/

console.log(this); // In strict mode: `undefined`. In non-strict mode (like the browser console), it's `window`.

function x() {
  console.log(this);
}
x(); // Logs `undefined` in strict mode, `window` in non-strict mode.
window.x(); // If in the browser, `this` will refer to `window`.

// -- Changing `this` based on how a function is invoked --
const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};

obj.x(); // Logs `obj`, as `this` inside the function refers to the object it's called on.

// -- `this` inside an arrow function --
const person = {
  name: "John",
  greet: () => {
    console.log(this);
    // Logs `undefined` in strict mode since arrow functions inherit `this` from the surrounding scope.
    // Arrow functions do not have their own `this`, they use the `this` value from where they were defined.
  },
};

person.greet(); // `this` does not refer to `person`, so it logs `undefined` in strict mode.

// -- Arrow functions inherit `this` lexically --
const obj3 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
      // Arrow function `y` inherits `this` from `x`'s context, which is `obj3`.
    };
    y(); // Logs `obj3`
  },
};

obj3.x(); // Since `y` is an arrow function, `this` refers to `obj3`.
