// ============================
// Study Material on Common JavaScript Problems
// ============================

// **1. Find Duplicate Elements in an Array**
// Definition: This method identifies and returns duplicate values from an array by comparing the index of each element with the first occurrence index.
const arr = [1, 2, 8, 2, 9, 8, 9];
const duplicate = arr.filter((val, index) => arr.indexOf(val) !== index);
console.log("Duplicates:", duplicate); // Output: [2, 8, 9]

// **2. Find Maximum and Minimum Values in an Array**
// Definition: We can find the maximum and minimum values using `Math.max` and `Math.min` methods or by using `reduce` method for more control.
const longArr = [1, 56, 78, 999, 34];
const max = Math.max.apply(null, longArr); // Using apply() to pass the array as arguments
const min = Math.min.apply(null, longArr); // Similarly, to get the minimum
console.log(`Max value: ${max}, Min value: ${min}`);

const max2 = longArr.reduce((acc, curr) => (curr > acc ? curr : acc), 0); // Using reduce to find max
const min2 = longArr.reduce((acc, curr) => (curr < acc ? curr : acc), Infinity); // Using reduce to find min
console.log(`Max2 value: ${max2}, Min2 value: ${min2}`);

// **3. Difference Between '==' and '===' in JavaScript**
// Definition: '==' compares values for equality with type coercion, while '===' compares both values and types for equality.
var a = 7;
var b = "7"; // 'b' is a string
console.log(a == b); // true (because it coerces the string '7' to a number)
console.log(a === b); // false (because the types are different: number vs string)

// **4. Find the Second Largest Element and Remove the Largest Element from an Array**
// Definition: We can find the largest number, remove it, and then find the next largest.
const numbers = [10, 20, 4, 45, 99, 23];
const largest = Math.max(...numbers);
const index = numbers.indexOf(largest);
numbers.splice(index, 1); // Removing the largest element
const secondLargest = Math.max(...numbers); // Finding the second largest by checking the remaining array
console.log(`First largest: ${largest}, Second largest: ${secondLargest}`);
console.log("Updated array:", numbers);

// **5. Filter Objects Based on Property (Age < 30)**
// Definition: We can filter out people under the age of 30 using `filter()` or find the first person using `find()`.
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
  { name: "Eve", age: 22 },
  { name: "Frank", age: 28 },
  { name: "Grace", age: 33 },
  { name: "Hannah", age: 38 },
];
const below30 = people.filter((person) => person.age < 30); // Filtering people under 30
const firstYouth = people.find((person) => person.age < 30); // Finding the first person under 30
console.log(below30);
console.log(firstYouth);

// **6. Find Missing Numbers in an Array**
// Definition: To find the numbers missing between the minimum and maximum values of an array, we loop through the range and check if the number exists in the array.
const manualArray = [1, 2, 3, 4, 5, 6, 9, 10];
const maxi = Math.max(...manualArray);
const mini = Math.min(...manualArray);
const result = [];
for (let i = mini; i <= maxi; i++) {
  if (!manualArray.includes(i)) {
    result.push(i);
  }
}
console.log("Missing numbers:", result);

// **7. Factorial Function (Recursive)**
// Definition: A function that returns the factorial of a number. Factorial of n (n!) is the product of all integers from 1 to n.
function factorial(n) {
  if (n === 1 || n === 0) {
    return 1; // Base case: 0! = 1 and 1! = 1
  } else {
    return n * factorial(n - 1); // Recursive call to find factorial
  }
}
console.log(factorial(5)); // Output: 120

// **8. Check if a Number is Prime**
// Definition: A prime number is a number greater than 1 that has no divisors other than 1 and itself.
function isPrime(num) {
  if (num <= 1) return "neither prime nor composite"; // 1 is neither prime nor composite
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return "not a prime number"; // If divisible by any number other than 1 and itself, it's not prime
    }
  }
  return "prime number"; // If no divisors, it's prime
}
console.log(isPrime(2)); // prime number
console.log(isPrime(4)); // not a prime number
console.log(isPrime(17)); // prime number

// **9. Count Vowels in a String**
// Definition: This function counts the number of vowels (a, e, i, o, u) in a given string, considering both uppercase and lowercase vowels.
function vowelCount(str) {
  const vowel = "aeiouAEIOU";
  let count = 0;
  for (const char of str) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(vowelCount("Hello World")); // Output: 3
console.log(vowelCount("JavaScript")); // Output: 3

// **10. Reverse a String**
// Definition: A function that reverses the order of characters in a string.
function reverseString(str) {
  let start = 0;
  let end = str.length - 1;
  let arr = str.split("");
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap characters at start and end
    start++;
    end--;
  }
  return arr.join(""); // Join the array back into a string
}
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"

// **11. Check if a String is a Palindrome**
// Definition: A palindrome is a word, phrase, number, or other sequence that reads the same forward and backward (ignoring spaces).
function isPalindrome(str) {
  let rev = str.split("").reverse().join(""); // Reverse the string
  return str === rev; // Compare the original and reversed strings
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

// **12. Merge Two Arrays**
// Definition: We can merge two arrays into one using `concat()` or spread operator.
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const merge = array1.concat(array2); // Using concat() to merge arrays
const merge2 = [...array1, ...array2]; // Using spread operator to merge arrays
console.log(merge);
console.log(merge2);

// **13. Capitalize the First Letter of Each Word in a Sentence**
// Definition: This function capitalizes the first letter of each word in a sentence.
function capitalizeWord(sentence) {
  const words = sentence.split(" ");
  const newWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first letter of each word
  });
  return newWords.join(" "); // Join the words back into a sentence
}
console.log(capitalizeWord("hello world")); // Output: "Hello World"
console.log(capitalizeWord("javascript is fun")); // Output: "Javascript Is Fun"

// **14. Fibonacci Sequence (Recursive)**
// Definition: The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones.
function fibonacci(n) {
  if (n === 1 || n === 2) return 1; // Base case: the first two Fibonacci numbers are 1
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive call
}
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55

// **15. Armstrong Number Check**
// Definition: An Armstrong number is a number that is equal to the sum of its own digits, each raised to the power of the number of digits.
function amstrong(num) {
  let str = num.toString();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Math.pow(parseInt(str[i]), str.length); // Raise each digit to the power of the number of digits
  }
  return sum == num; // Compare the sum to the original number
}
console.log(amstrong(153)); // true
console.log(amstrong(370)); // true
console.log(amstrong(371)); // true
console.log(amstrong(9474)); // true
console.log(amstrong(123)); // false
