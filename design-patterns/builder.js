// The Builder Pattern is a creational design pattern that lets you create complex objects step by step.
// Instead of defining a single constructor with many parameters, the builder pattern provides a way to create an object in a customizable and flexible manner.
// The key idea of the Builder Pattern is to separate the construction of an object from its representation.
// Product Class: Represents the object we want to build (Bike)
class Bike {
  constructor() {
    this.engine = null; // Engine type for the bike
    this.tire = null; // Tire type for the bike
  }
}

// Builder Class: Provides methods to set specific parts of the bike
class BikeBuilder {
  constructor() {
    this.bike = new Bike(); // Initializes a new bike instance to configure
  }

  // Method to set the engine type of the bike
  setEngine(eng) {
    this.bike.engine = eng;
    return this; // Returns 'this' to allow method chaining
  }

  // Method to set the tire type of the bike
  setTire(type) {
    this.bike.tire = type;
    return this; // Returns 'this' to allow method chaining
  }

  // Method to get the fully built bike object
  getBike() {
    return this.bike;
  }
}

// Director Class: Provides predefined configurations for specific bike types
class Director {
  // Method to create a sports bike with specific configurations
  static createSportsBike() {
    return new BikeBuilder()
      .setEngine("900cc") // Set engine for sports bike
      .setTire("thick tyres") // Set tire type for sports bike
      .getBike(); // Return the built sports bike
  }

  // Method to create a scooter with specific configurations
  static createScooter() {
    return new BikeBuilder()
      .setEngine("100cc") // Set engine for scooter
      .setTire("small tyres") // Set tire type for scooter
      .getBike(); // Return the built scooter
  }
}

// Using the Director to create specific bike types
const myBike = Director.createSportsBike(); // Creates a sports bike with predefined specifications
console.log(myBike);

const dadsBike = Director.createScooter(); // Creates a scooter with predefined specifications
console.log(dadsBike);
