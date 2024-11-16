 // Original array with nested array inside it
const array1 = [1, [2, 3], 4, 5];

// Shallow copy using the spread operator (copies the outer array, but inner arrays are still referenced)
const shallowCopy = [...array1];

// Modify the shallowCopy by pushing a new value (doesn't affect array1 since the outer arrays are different)
shallowCopy.push(100);
console.log('Original Array:', array1);  // [1, [2, 3], 4, 5] (no change in array1)
console.log('Shallow Copy:', shallowCopy);  // [1, [2, 3], 4, 5, 100] (shallowCopy is modified)

// Modifying the inner array of shallowCopy will also affect array1 (because they share the same reference for the nested array)
shallowCopy[1][0] = 888;  // Mutates the inner array in both shallowCopy and array1
console.log('After Modification:');
console.log('Original Array:', array1);  // [1, [888, 3], 4, 5] (inner array is mutated in both arrays)
console.log('Shallow Copy:', shallowCopy);  // [1, [888, 3], 4, 5, 100] (same mutation is seen in shallowCopy)

// Deep copy using JSON methods (creates a new, independent copy)
const deepCopy = JSON.parse(JSON.stringify(array1));  // Deep copy using JSON (no shared references)

console.log('Deep Copy:', deepCopy);  // [1, [888, 3], 4, 5] (deep copy is independent of the original)

// Modifying the deep copy will not affect the original array since it's a completely separate copy
deepCopy[1][0] = 999;  // Modifies the deep copy's inner array without affecting array1
console.log('After Deep Copy Modification:');
console.log('Original Array:', array1);  // [1, [888, 3], 4, 5] (original array remains unchanged)
console.log('Deep Copy:', deepCopy);  // [1, [999, 3], 4, 5] (deep copy is modified independently)
