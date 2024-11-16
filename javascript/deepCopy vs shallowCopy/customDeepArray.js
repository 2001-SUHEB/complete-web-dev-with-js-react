function deepCopy(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArray[i] = deepCopy(arr[i]);
    } else {
      newArray[i] = arr[i];
    }
  }
  return newArray;
}

const array1 = [1, [2, 3], 4, 5]; // Original array with a nested array

// Perform deep copy of array1
const deepCopyArray = deepCopy(array1);

// Modify the deep copy without affecting the original array
// deepCopyArray[1][0] = 999;  // Modify the nested array in the deep copy

// Display the results
console.log("Original Array:", array1); // [1, [2, 3], 4, 5] (original array remains unchanged)
console.log("Deep Copy Array:", deepCopyArray); // [1, [999, 3], 4, 5] (deep copy is modified independently)
