 // Original nested object that contains multiple levels of depth (objects and arrays)
const nestedObject = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    hobbies: ["reading", "traveling", "swimming"],
    education: {
        highSchool: {
            name: "Anytown High School",
            yearGraduated: 2010
        },
        university: {
            name: "State University",
            yearGraduated: 2014,
            degree: "Computer Science"
        }
    }
};

// Using JSON methods to create a deep copy of the original object
// This ensures that both objects do not share references to the same memory
const deepCopy = JSON.parse(JSON.stringify(nestedObject));

// Log the deep copy before any modification
console.log("Deep Copy (Before Modification):", deepCopy);

// Modifying the 'university' name inside the 'education' object of the deep copy
deepCopy.education.university.name = "Vit";

// Log the deep copy after modification to see the change
console.log("Deep Copy (After Modification):", deepCopy);

// Log the original object to show that it remains unchanged
// Deep copy does not affect the original object
console.log("Original Object (After Modification to Deep Copy):", nestedObject);
