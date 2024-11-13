 // **1. Exact Match for Primitive Values (toBe)**
function add(a, b) {
  return a + b;
}

// **2. Deep Comparison for Objects/Arrays (toEqual)**
function getUser() {
  return { name: 'John', age: 30 };
}

// **3. Checking if Value is Truthy (toBeTruthy)**
function isActive(user) {
  return user.active;
}

// **4. Checking if Value is Falsy (toBeFalsy)**
function isEmpty(str) {
  return str === '';  // Empty string returns falsy
}

// **5. Checking if Array Contains a Value (toContain)**
function containsItem(arr, item) {
  return arr.includes(item);
}

// **6. Checking Length of an Array/String (toHaveLength)**
function getLength(str) {
  return str.length;
}

// **7. Checking if Value is Null (toBeNull)**
function isNull(value) {
  return value === null;
}

// **8. Checking if Value is Defined (toBeDefined)**
function getName(user) {
  return user.name;
}

// **9. String Match with Regular Expression (toMatch)**
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Export all functions for use in the test file
module.exports = {
  add,
  getUser,
  isActive,
  isEmpty,
  containsItem,
  getLength,
  isNull,
  getName,
  isValidEmail
};
