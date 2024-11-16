 // Custom deep copy function
function deepcopy(obj) {
    // Check if the obj is not an object (including arrays)
    if (obj === null || typeof obj !== 'object') {
        return obj; // Return primitive value (no need to copy)
    }

    // Create a new object or array to hold the deep copy
    let result;
    if (Array.isArray(obj)) {
        result = []; // If it's an array, create a new array
        for (let i = 0; i < obj.length; i++) {
            result[i] = deepcopy(obj[i]); // Recursively copy array elements
        }
    } else {
        result = {}; // If it's an object, create a new object
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                result[key] = deepcopy(obj[key]); // Recursively copy object properties
            }
        }
    }

    return result; // Return the deep-copied object/array
}

// Test the deep copy function
const original = {
    name: "John",
    address: {
        city: "New York",
        zip: "10001"
    },
    hobbies: ["reading", "traveling", "swimming"]
};

// Perform deep copy
const copied = deepcopy(original);

console.log("Original Object:", original); // Original object (unchanged)
console.log("Copied Object:", copied); // Copied object

// Modify the copied object
copied.address.city = "Los Angeles";
copied.hobbies.push("coding");

console.log("After Modification:");
console.log("Original Object:", original); // Original object should remain unchanged
console.log("Copied Object:", copied);    // Copied object should reflect changes
