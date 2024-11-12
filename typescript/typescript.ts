 // **Static Typing**
// Static typing ensures that types are known at compile time. This helps catch errors early before the code is executed.
const message: string = "hello hi there hw are you"; // The 'message' variable is typed as a string.
console.log(message);

// **Type Annotation**
// Type annotation is used to explicitly declare the type of variables, parameters, and return values in functions.
function sayHello(name: string): string { // The 'name' parameter is explicitly typed as a string.
  console.log(`hi ${name}`);
  return `hi ${name}`;
}

sayHello("suheb"); // Valid: The argument 'suheb' is a string.
 // sayHello(78); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// **Interfaces**
// Interfaces define the structure of an object. They allow you to enforce the types and properties an object must have.
interface Measurement {
  height: number; // height must be of type number
  width: number;  // width must be of type number
}

const obj: Measurement = {
  height: 10,
  width: 80,  // The object must have height and width properties as defined in the interface
};

// **Generics**
// Generics allow creating reusable functions or classes that can work with any type, making the code flexible and type-safe.
function getNum<T>(num: T): T { // <T> is a placeholder for any type.
  return num;
}

const output = getNum<number>(45); // The type 'number' is provided, so output will be of type number

// **Enums**
// Enums are used to define a set of named constants that help improve code readability and ensure valid values.
enum Directions {
  First = 1,  // First is assigned the value 1
  Second,     // Second will automatically have the value 2 (incremented from the previous value)
  Third,      // Third will have the value 3
  Fourth,     // Fourth will have the value 4
}

console.log(Directions.Second); // Output: 2, because 'Second' was assigned value 2 by default

// **Tuples**
// Tuples are arrays with fixed types and fixed lengths for each element, providing more control over the data structure.
let tuple: [number, string, boolean];  // A tuple that must contain a number, a string, and a boolean.
tuple = [1, "first", true];  // Valid: the types match the defined tuple structure

// **Type Aliases, Union Types, and Type Intersection**
// Type aliases create custom types. Union types allow a variable to hold multiple possible types, and intersection types combine multiple types into one.

type CustomType = number | string | boolean;  // CustomType can be a number, string, or boolean
let value: CustomType = "suheb"; // Valid: value is a string
value = 88;    // Valid: value is a number
value = true;  // Valid: value is a boolean

// Intersection Types: Combines multiple types into one.
interface A {
  name: string;
}

interface B {
  age: number;
}

type C = A & B; // C is an intersection of A and B, so it must have both 'name' and 'age' properties.

const mixObject: C = {
  name: "suheb",  // 'name' from interface A
  age: 22,        // 'age' from interface B
};

// **Decorators**
// Decorators are functions that can be applied to classes, methods, properties, or parameters at design time to modify their behavior.

function logger(target: Function) {  // A class decorator that logs the class name
  console.log(`Class ${target.name} is created`);
}

@logger  // Applying the decorator to the User class
class User {
  name: string;  // 'name' property of User class
  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("syed");  // Output: "Class User is created"

// **Access Modifiers**
// Access modifiers control the visibility and accessibility of class members:
// - `public`: accessible anywhere
// - `private`: only accessible within the class
// - `protected`: accessible within the class and subclasses

class MyClass {
  public name: string;    // 'name' is public, so it can be accessed anywhere
  private age: number;    // 'age' is private, so it cannot be accessed outside the class
  protected address: string;  // 'address' is protected, so it can be accessed in subclasses

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

const person = new MyClass("John", 30, "123 Main St");

console.log(person.name); // Valid (public): Accessible from outside the class
// console.log(person.age); // Error: 'age' is private and cannot be accessed outside the class
// console.log(person.address); // Error: 'address' is protected and cannot be accessed outside the class

