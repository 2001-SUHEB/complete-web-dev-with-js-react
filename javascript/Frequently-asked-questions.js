// Flatten a nested array using Array's flat() method
const nestedArray = [[1, [2, 3, 3], [3], [4, 6], [9]], [[2, 3, 4]]];

// Using flat() with Infinity to flatten the array deeply
const deeplyFlattenedArray = nestedArray.flat(Infinity);
console.log(deeplyFlattenedArray); // Output: [1, 2, 3, 3, 3, 4, 6, 9, 2, 3, 4]

// Alternative: Flatten the array manually using recursion
const recursiveFlatten = (array) => {
  return array.reduce((accumulator, current) => {
    // If the current value is an array, recursively flatten it, otherwise, concatenate it
    return Array.isArray(current)
      ? accumulator.concat(recursiveFlatten(current))
      : accumulator.concat(current);
  }, []);
};
console.log(recursiveFlatten(nestedArray)); // Output: [1, 2, 3, 3, 3, 4, 6, 9, 2, 3, 4]

// -----------------------------------------
// Flattening a nested object using recursion

function flatten(obj, prefix = "") {
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      if (
        typeof obj[key] === "object" &&
        !Array.isArray(obj[key]) &&
        obj[key] !== null
      ) {
        Object.assign(result, flatten(obj[key], newKey)); // Recursive call for nested objects
      } else {
        result[newKey] = obj[key]; // Base case: flat key-value
      }
    }
  }
  return result;
}

const nestedObjectStructure = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4,
        h: {
          i: 5,
          j: {
            k: 6,
          },
        },
      },
    },
  },
  l: 7,
  m: {
    n: 8,
    o: {
      p: 9,
      q: {
        r: 10,
        s: {
          t: 11,
        },
      },
    },
  },
};

const flattenedObject = flattenObjectStructure(nestedObjectStructure);
console.log(flattenedObject);

// -----------------------------------------
// Filter an array to search for strings that contain a specific substring

const dictionary = [
  "CODGE",
  "ODG",
  "LODGES",
  "SODG",
  "dodge",
  "mODJ",
  "LODGESSSS",
];
const substringToSearch = "ODG";

// Use Array's filter method to find matching strings
const filteredResults = dictionary.filter((word) =>
  word.includes(substringToSearch)
);
console.log(filteredResults); // Output: [ 'CODGE', 'ODG', 'LODGES', 'SODG', 'LODGESSSS' ]

// -----------------------------------------
// Merging two arrays and finding the median

const arrayA = [-5, 3, 6, 12, 15];
const arrayB = [-12, -10, -6, -3, 4, 10];

console.log(mergeAndFindMedian(arrayA, arrayB)); // Output: 3

function mergeAndFindMedian(arr1, arr2) {
  const mergedArray = [...arr1, ...arr2];
  const length = mergedArray.length;
  const sortedMergedArray = mergedArray.sort((a, b) => a - b);
  let index = 0;

  // If the length is odd, return the middle element
  if (length % 2 !== 0) {
    index = Math.floor(length / 2);
    return sortedMergedArray[index];
  } else {
    // If the length is even, return the average of the two middle elements
    index = length / 2;
    return (sortedMergedArray[index - 1] + sortedMergedArray[index]) / 2;
  }
}

// -----------------------------------------
// Find the key with the highest average score in an object

const studentScores = {
  Alice: [85, 92, 88],
  Bob: [70, 78, 82],
  Charlie: [95, 98, 99],
  Diana: [88, 90, 92],
};

function findBestScore(scores) {
  let highestAverage = 0; // To store the highest average score
  let topStudent = ""; // To store the key with the highest average

  for (const student in scores) {
    if (scores.hasOwnProperty(student)) {
      // Calculate the average score
      const total = scores[student].reduce((sum, score) => sum + score, 0);
      const average = total / scores[student].length;

      // Update the highest average and corresponding student if necessary
      if (average > highestAverage) {
        highestAverage = average;
        topStudent = student;
      }
    }
  }
  return [topStudent, highestAverage]; // Return the student and the highest average score
}

const [topStudent, highestAverage] = findBestScore(studentScores);
console.log(topStudent); // Output: Charlie
console.log(highestAverage); // Output: 97.33333333333333

// -----------------------------------------
// Problem 1: Find the product with the most vowels in its title

const productList = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

function countVowels(word) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (const char of word) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

let maxVowelCount = 0;
let productTitle = "";

const [productWithMostVowels, vowelCount] = productList.reduce(
  (acc, currentProduct) => {
    let count = countVowels(currentProduct.title);
    if (count > maxVowelCount) {
      maxVowelCount = count;
      productTitle = currentProduct.title;
    }
    acc = [productTitle, maxVowelCount];
    return acc;
  },
  {}
);

console.log(`Product: ${productWithMostVowels}, Vowel Count: ${vowelCount}`); // Output: Product: Cabbage, Vowel Count: 3

// -----------------------------------------
// Problem 2: Chunk an array into smaller arrays of a given size

const chunkArrayInput = [1, 2, 3, 4, 5, 6, 7, 8, 4, 9];

function chunkArrayBySize(arr, size) {
  let chunks = [];
  if (!arr.length) {
    return [];
  } else if (arr.length <= size) {
    return [[...arr]];
  } else {
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }
}

let chunkedOutput = chunkArrayBySize(chunkArrayInput, 3);
console.log(chunkedOutput); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 4], [9]]

// -----------------------------------------
// Problem 3: Merge two objects into one

const firstObject = { name: "Suheb" };
const secondObject = { age: 22 };

// Using the spread operator
const mergedObject = { ...firstObject, ...secondObject };

// Using Object.assign
let mergedObjectAssign = {};
Object.assign(mergedObjectAssign, firstObject, secondObject);

console.log(mergedObject); // Output: { name: "Suheb", age: 22 }
console.log(mergedObjectAssign); // Output: { name: "Suheb", age: 22 }

// -----------------------------------------
// Problem 4: Find the missing number in an array

function findMissing(arr) {
  const n = arr.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
  return expectedSum - actualSum;
}

console.log(findMissing([1, 2, 0])); // Output: 3
