const {
    add,
    getUser,
    isActive,
    isEmpty,
    containsItem,
    getLength,
    isNull,
    getName,
    isValidEmail
  } = require('./testing');
  
  // **1. Exact Match for Primitive Values (toBe)**
  test('add function should return correct sum', () => {
    expect(add(1, 2)).toBe(3);  // Passes: 1 + 2 equals 3
    expect(add(5, 7)).toBe(12);  // Passes: 5 + 7 equals 12
  });
  
  // **2. Deep Comparison for Objects/Arrays (toEqual)**
  test('getUser function should return correct user object', () => {
    const user = { name: 'John', age: 30 };
    expect(getUser()).toEqual(user);  // Passes: Deep equality check
  });
  
  // **3. Checking if Value is Truthy (toBeTruthy)**
  test('should be truthy when user is active', () => {
    const user = { active: true };
    expect(isActive(user)).toBeTruthy();  // Passes: active is true
  });
  
  test('should be falsy when user is not active', () => {
    const user = { active: false };
    expect(isActive(user)).toBeFalsy();  // Passes: active is false
  });
  
  // **4. Checking if Value is Falsy (toBeFalsy)**
  test('should return truthy for an empty string', () => {
    expect(isEmpty('')).toBeTruthy();  // Passes: empty string should be true (returns true)
  });
  
  test('should return falsy for a non-empty string', () => {
    expect(isEmpty('Hello')).toBeFalsy();  // Passes: non-empty string should be falsy (returns false)
  });
  
  // **5. Checking if Array Contains a Value (toContain)**
  test('should contain the specified item', () => {
    const array = [1, 2, 3, 4];
    expect(containsItem(array, 3)).toBeTruthy();  // Passes: array contains 3
    expect(containsItem(array, 5)).toBeFalsy();  // Passes: array does not contain 5
  });
  
  // **6. Checking Length of an Array/String (toHaveLength)**
  test('should return correct string length', () => {
    expect(getLength('Hello')).toBe(5);  // Passes: 'Hello' has length 5
    expect(getLength('')).toBe(0);  // Passes: empty string has length 0
  });
  
  // **7. Checking if Value is Null (toBeNull)**
  test('should be null', () => {
    expect(isNull(null)).toBeTruthy();  // Passes: value is null
  });
  
  test('should not be null', () => {
    expect(isNull(42)).toBeFalsy();  // Passes: value is not null
  });
  
  // **8. Checking if Value is Defined (toBeDefined)**
  test('should be defined', () => {
    const user = { name: 'John' };
    expect(getName(user)).toBeDefined();  // Passes: name is defined
  });
  
  test('should be undefined if no name is provided', () => {
    const user = {};
    expect(getName(user)).toBeUndefined();  // Passes: name is undefined
  });
  
  // **9. String Match with Regular Expression (toMatch)**
  test('should match email regex', () => {
    expect(isValidEmail('test@example.com')).toBe(true);  // Passes: email is valid
    expect(isValidEmail('invalid-email')).toBe(false);  // Passes: invalid email
  });
  