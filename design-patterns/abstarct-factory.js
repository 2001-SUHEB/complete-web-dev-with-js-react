// The Abstract Factory Pattern is a creational design pattern that provides an interface for creating families 
// of related or dependent objects without specifying their concrete classes. In simpler terms, it allows a client 
// to create a set of related objects (like a whole family of products) that belong together, without knowing their exact classes.

// Define an abstract class for Engine
class Engine {
    start() {
      // Abstract method to be overridden by subclasses
      throw new Error("This method must be overridden!");
    }
  }
  
  // Define an abstract class for Tires
  class Tires {
    roll() {
      // Abstract method to be overridden by subclasses
      throw new Error("This method must be overridden!");
    }
  }
  
  // Concrete class representing a bike engine
  class BikeEngine extends Engine {
    start() {
      console.log("Bike engine started"); // Start action specific to BikeEngine
    }
  }
  
  // Concrete class representing a car engine
  class CarEngine extends Engine {
    start() {
      console.log("Car engine started"); // Start action specific to CarEngine
    }
  }
  
  // Concrete class representing a bike tire
  class BikeTire extends Tires {
    roll() {
      console.log("Bike tire rolls"); // Roll action specific to BikeTire
    }
  }
  
  // Concrete class representing a car tire
  class CarTire extends Tires {
    roll() {
      console.log("Car tire rolls"); // Roll action specific to CarTire
    }
  }
  
  // Define an abstract factory class for creating vehicles
  class VehicleFactory {
    CreateEngine() {
      // Abstract method to be overridden by subclasses to create an engine
      console.log("This method must be overridden!");
    }
  
    CreateTire() {
      // Abstract method to be overridden by subclasses to create a tire
      console.log("This method must be overridden!");
    }
  }
  
  // Concrete factory for creating Bike-specific parts
  class BikeFactory extends VehicleFactory {
    CreateEngine() {
      return new BikeEngine(); // Creates a BikeEngine instance
    }
  
    CreateTire() {
      return new BikeTire(); // Creates a BikeTire instance
    }
  }
  
  // Concrete factory for creating Car-specific parts
  class CarFactory extends VehicleFactory {
    CreateEngine() {
      return new CarEngine(); // Creates a CarEngine instance
    }
  
    CreateTire() {
      return new CarTire(); // Creates a CarTire instance
    }
  }
  
  // Client code that works with any factory (BikeFactory or CarFactory)
  // without knowing the specific class names, allowing flexibility
  function ClientCode(factory) {
    const engine = factory.CreateEngine(); // Get an engine from the factory
    const tire = factory.CreateTire(); // Get a tire from the factory
  
    engine.start(); // Start the engine (uses the specific start method of BikeEngine or CarEngine)
    tire.roll(); // Roll the tire (uses the specific roll method of BikeTire or CarTire)
  }
  
  // Instantiate BikeFactory and CarFactory and pass them to the ClientCode
  const bike = new BikeFactory(); // Bike factory to create bike-specific parts
  ClientCode(bike);
  
  const car = new CarFactory(); // Car factory to create car-specific parts
  ClientCode(car);
  