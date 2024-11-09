// Array of circle radii
const radius = [3, 1, 2, 4];

/*
 * We can use the Array.map() method to perform calculations on each element in the array.
 * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
 *
 * Example of using Array.map():
 *
 * const area = radius.map((r) => Math.PI * r * r);       // Calculates the area of each circle
 * const diameter = radius.map((r) => 2 * r);             // Calculates the diameter of each circle
 * const circumference = radius.map((r) => Math.PI * 2 * r); // Calculates the circumference of each circle
 *
 * console.log(area);           // Logs array of areas
 * console.log(diameter);       // Logs array of diameters
 * console.log(circumference);  // Logs array of circumferences
 */

// Defining functions to calculate area and diameter of a circle

// Function to calculate the area of a circle
// Takes the radius as input and returns the area (π * r^2)
const area = function (radius) {
    return Math.PI * radius * radius;
};

// Function to calculate the diameter of a circle
// Takes the radius as input and returns the diameter (2 * r)
const diameter = (radius) => {
    return radius * 2;
};

/*
 * Higher-order function `calculate`
 * A higher-order function is a function that takes another function as an argument or returns a function as a result.
 * Here, `calculate` takes an array and a logic function, which defines the calculation to apply to each element.
 * 
 * Parameters:
 * 1. arr - the array on which calculations will be performed
 * 2. logic - the function to apply to each element of the array (e.g., area, diameter)
 * 
 * Returns:
 * - An array of results after applying the logic function to each element
 */
const calculate = (arr, logic) => {
    let output = [];                    // Initialize an empty array to store results
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));     // Apply the logic function to each element and store the result
    }
    return output;                      // Return the array of calculated results
};

// Testing `calculate` function by passing in `area` and `diameter` functions
console.log(calculate(radius, area));       // Calculates areas of circles and logs the result
console.log(calculate(radius, diameter));    // Calculates diameters of circles and logs the result

/*
 * Adding a custom Higher-Order Calculation (HOC) function to Array.prototype
 * 
 * `Array.prototype.HOC` - Custom function to apply any calculation logic to each element in an array
 * - This function works similarly to `calculate`, but it’s attached to `Array.prototype`,
 *   which allows it to be used as a method on any array instance.
 * - Using a regular function (not an arrow function) here is necessary to ensure that `this`
 *   refers to the array instance.
 * 
 * Parameters:
 * 1. logic - the function to apply to each element of the array (e.g., area, diameter)
 * 
 * Returns:
 * - An array of results after applying the logic function to each element
 */
Array.prototype.HOC = function (logic) {
    let output = [];                    // Initialize an empty array to store results
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));    // Apply the logic function to each element and store the result
    }
    return output;                      // Return the array of calculated results
};

// Testing custom HOC method on the `radius` array
console.log(radius.HOC(area));          // Calls HOC on radius array to calculate areas
console.log(radius.HOC(diameter));       // Calls HOC on radius array to calculate diameters

/*
 * Summary of Results:
 * - calculate(radius, area) and radius.HOC(area) produce the same result, both calculating the area of each circle.
 * - calculate(radius, diameter) and radius.HOC(diameter) produce the same result, calculating the diameter of each circle.
 * 
 * This approach demonstrates:
 * 1. Higher-order functions for flexible calculations on arrays.
 * 2. Adding a custom method to Array.prototype to apply various functions on arrays directly.
 * 3. Reusable, modular code for performing different calculations on array elements.
 */
