# 🌟 Problem: Property Name Collision Without Symbols

Imagine you're writing a large application with two different modules, **UserModule** and **AdminModule**. Both modules need to store a `"name"` property in their objects, but you don't want these `"name"` properties to conflict or overwrite each other.

Without Symbols, this could be a problem if both modules use the same property name in an object:

```javascript
// User Module
let user = {
  name: "Alice", // Property "name" in UserModule
  age: 25,
};

// Admin Module
let admin = {
  name: "Bob", // Property "name" in AdminModule
  role: "Administrator",
};

// Collision happens if you try to merge or compare
console.log(user.name); // "Alice"
console.log(admin.name); // "Bob"

// If we somehow merged these objects, one property could overwrite the other
let merged = { ...user, ...admin };
console.log(merged.name); // "Bob" (Admin's name overwrites User's name)
```

## 💡 Solution: Using Symbols to Avoid Property Name Collisions
By using Symbols as the property keys, we can ensure that the properties from different modules remain unique even if they have the same name in their descriptions.

Here's how we can fix this using Symbols:

```javascript
Copy code
// Create symbols for uniqueness
const userName = Symbol("name");  // Unique symbol for UserModule
const adminName = Symbol("name"); // Unique symbol for AdminModule

// User Module
let user = {
  [userName]: "Alice",  // Use symbol as key for UserModule
  age: 25
};

// Admin Module
let admin = {
  [adminName]: "Bob",   // Use a different symbol for AdminModule
  role: "Administrator"
};

// Accessing Symbol properties (the names won't collide)
console.log(user[userName]);  // "Alice"
console.log(admin[adminName]);  // "Bob"

// Even if we merge the objects, there is no collision
let merged = { ...user, ...admin };
console.log(merged[userName]);  // "Alice"
console.log(merged[adminName]);  // "Bob"

// Checking if the symbols are equal (they are unique even with the same description)
console.log(userName === adminName);  // false

```

## 📝 Explanation:

1. Creating Symbols:
   const userName = Symbol("name"); creates a unique symbol for the user's name.
   const adminName = Symbol("name"); creates a different symbol for the admin's name, even though both symbols have the same description "name".
2. Using Symbols as Keys:
   In the user object, we use [userName] as a key for the name, and in the admin object, we use [adminName] as a key.
   By using symbols instead of a regular string like "name", the properties in the user and admin objects are guaranteed to be unique, even though both have the same description "name".
3. Merging the Objects:
   When merging user and admin into a new object merged, the "name" properties from both objects will not collide because we are using unique symbols (userName and adminName) as keys.
   The merged object will contain both the userName and adminName properties, and their values won't overwrite each other.
4. Uniqueness of Symbols:
   console.log(userName === adminName) will return false because symbols are unique. Even though the descriptions are the same ("name"), they are still distinct symbols, ensuring there’s no conflict.
   🚀 Summary of Why and When to Use Symbols:
   Avoid Property Name Collisions: When working with different parts of a large codebase or integrating with external libraries, symbols ensure that property names won’t interfere with each other.
   Unique Keys for Different Modules: Symbols are useful when different parts of the application (like UserModule and AdminModule) need the same property names but should not overwrite each other.
   By using symbols, you can ensure that the properties are always unique, preventing any unintended overwriting or conflicts. ✨
