// Array Methods Study Material

// Example 1: Mapping and Transforming Data

// Original array with some duplicate and empty values
const arr = [1, 2, 3, 4, 4, , 5, 5, 100];

// 1.1. Doubling the elements
const double = arr.map(function (x) {
  return x * 2; // Multiply each element by 2
});

// 1.2. Tripling the elements
const triple = arr.map((x) => {
  return x * 3; // Multiply each element by 3
});

// 1.3. Convert numbers to binary
function toBinary(x) {
  return x.toString(2); // Convert number to binary string
}

// Convert each number in the array to binary
const binary = arr.map(toBinary);

// 1.4. Convert binary strings back to numbers
const number = binary.map((x) => {
  return parseInt(x, 2); // Convert binary string back to number
});

console.log("Doubling the elements:", double); // [2, 4, 6, 8, 8, NaN, 10, 10, 200]
console.log("Tripling the elements:", triple); // [3, 6, 9, 12, 12, NaN, 15, 15, 300]
console.log("Binary representation:", binary); // ["1", "10", "11", "100", "100", "NaN", "101", "101", "1100100"]
console.log("Converted back to numbers:", number); // [1, 2, 3, 4, 4, NaN, 5, 5, 100]

// Example 2: Filtering and Removing Duplicates

// 2.1. Filter even and odd numbers
const even = arr.filter((x) => x % 2 === 0); // Filter even numbers
const odd = arr.filter((x) => x % 2 !== 0); // Filter odd numbers

// 2.2. Remove duplicate values using filter
const unique = arr.filter((x, index, arr) => arr.indexOf(x) === index);

// 2.3. Remove duplicates using Set (alternative method)
const uni = [...new Set(arr)];

console.log("Even numbers:", even); // [2, 4, 4, 100]
console.log("Odd numbers:", odd); // [1, 3, 5, 5]
console.log("Unique values (using filter):", unique); // [1, 2, 3, 4, 5, 100]
console.log("Unique values (using Set):", uni); // [1, 2, 3, 4, 5, 100]

// Example 3: Reducing Data

// 3.1. Calculate the sum of all elements
const sum = arr.reduce((acc, curr) => acc + curr, 0); // Sum of all values in the array

// 3.2. Find the maximum value in the array
const max = arr.reduce((acc, curr) => (curr > acc ? curr : acc), 0); // Get the maximum value

// 3.3. Find the minimum value in the array
const min = arr.reduce((acc, curr) => (curr <= acc ? curr : acc), arr[0]); // Get the minimum value

console.log("Sum of elements:", sum); // 120
console.log("Maximum value:", max); // 100
console.log("Minimum value:", min); // 1

// Example 4: Working with Objects - Grouping by Age

// Array of people with different ages
const people = [
  { firstName: "John", lastName: "Doe", age: 26 },
  { firstName: "Jane", lastName: "Smith", age: 34 },
  { firstName: "Michael", lastName: "Johnson", age: 42 },
  { firstName: "Emily", lastName: "Davis", age: 26 },
  { firstName: "Chris", lastName: "Brown", age: 34 },
  { firstName: "Katie", lastName: "Williams", age: 24 },
];

// 4.1. Group people by age and count them
const ageGroup = people.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] += 1; // Increment the count for the same age
  } else {
    acc[curr.age] = 1; // Start count for a new age group
  }
  return acc;
}, {}); // Initial accumulator is an empty object

// 4.2. Get the first names of people under 30
const young = people
  .filter((person) => person.age < 30)
  .map((person) => person.firstName);

// 4.3. Get the first names of people over 30
const elder = people.reduce((acc, curr) => {
  if (curr.age > 30) {
    acc.push(curr.firstName); // Add first name to accumulator if age > 30
  }
  return acc;
}, []); // Initial accumulator is an empty array

console.log("Age group count:", ageGroup); // { 26: 2, 34: 2, 42: 1, 24: 1 }
console.log("Young people under 30:", young); // ["John", "Emily", "Katie"]
console.log("Elder people over 30:", elder); // ["Jane", "Michael", "Chris"]

// Conclusion: In this study material, we've covered several key array methods like map(), filter(), reduce(), and Set to manipulate and transform arrays. These methods help with common tasks like filtering, transforming, and aggregating data in a more functional and declarative way.

