// Prototype Design Pattern:
// The prototype design pattern is a creational design pattern that allows you to create new objects based on an existing object (the prototype).
// This pattern is useful for creating instances of objects without having to define a new class or constructor function.
//
// In this example, the 'car' object serves as a prototype. The 'clone' method creates a new object that inherits from 'car' using Object.create(this).
// This means that the new object (newCar) has access to all properties and methods defined on the 'car' object.
//
// Benefits of the Prototype Design Pattern:
// 1. Memory Efficiency: Shared properties and methods are stored on the prototype, reducing memory usage.
// 2. Dynamic Behavior: You can add or modify methods on the prototype, and all instances will reflect those changes.
// 3. Simplified Object Creation: You can create new objects without the need for complex constructor logic.

// Define a car object with properties and methods
const car = {
  brand: "lamborghini", // The brand of the car
  model: "GT", // The model of the car
  year: 2020, // The year the car was released

  // Method to display car information
  display: function () {
    // Use template literals to construct a message
    console.log(
      `The renowned ${this.brand} car brand has proudly unveiled the ${this.model} model, which was launched in the year ${this.year}.`
    );
  },

  // Method to clone the car object
  clone: function () {
    // Create a new object with the same prototype as the current car object
    const obj = Object.create(this);
    return obj; // Return the new cloned object
  },
};

// Call the display method on the original car object
car.display();

// Clone the car object to create a newCar object
const newCar = car.clone();
// Modify the properties of the newCar object
newCar.brand = "audi"; // Change the brand to Audi
newCar.year = 2024; // Change the year to 2024
newCar.model = "RX"; // Change the model to RX

// Call the display method on the newCar object
newCar.display();
