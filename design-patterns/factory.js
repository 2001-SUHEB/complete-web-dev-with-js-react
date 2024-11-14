 // The Factory Method Pattern allows a class to delegate the responsibility of creating instances of related objects (like delivery types)
// to subclasses. This is useful for creating an instance with behavior specific to the concrete subclass (like Swiggy or Zomato).

// Base class for Delivery, representing a food delivery process
class Delivery {
    // Method to simulate order preparation
    getOrder() {
      console.log("Order is getting prepared...");
    }
  
    // Abstract method for delivery - to be implemented in specific subclasses
    deliver() {
      throw new Error("Food must be delivered!");
    }
  
    // Method to confirm successful delivery
    success() {
      console.log("Order delivered successfully!");
    }
  }
  
  // Concrete class for SwiggyDelivery - implements delivery behavior specific to Swiggy
  class SwiggyDelivery extends Delivery {
    // Swiggy-specific implementation of delivery
    deliver() {
      console.log("Food delivered by Swiggy!");
    }
  }
  
  // Concrete class for ZomatoDelivery - implements delivery behavior specific to Zomato
  class ZomatoDelivery extends Delivery {
    // Zomato-specific implementation of delivery
    deliver() {
      console.log("Food delivered by Zomato!");
    }
  }
  
  // Base class for Employee - represents an employee concept in delivery
  class Employee {
    // Abstract method for joining an organization, to be implemented in concrete subclasses
    join() {
      throw new Error("Must join an organization to deliver food!");
    }
  }
  
  // Concrete class for Swiggy employee - uses SwiggyDelivery for Swiggy-specific delivery process
  class Swiggy extends Employee {
    // Swiggy-specific join behavior that returns a SwiggyDelivery instance
    join() {
      console.log("Joined Swiggy");
      return new SwiggyDelivery();
    }
  }
  
  // Concrete class for Zomato employee - uses ZomatoDelivery for Zomato-specific delivery process
  class Zomato extends Employee {
    // Zomato-specific join behavior that returns a ZomatoDelivery instance
    join() {
      console.log("Joined Zomato");
      return new ZomatoDelivery();
    }
  }
  
  // Client function that simulates the delivery process
  function Clientcode(creator) {
    const jobDescription = creator.join(); // Organization (Swiggy or Zomato) joins and returns a specific delivery type
    jobDescription.getOrder(); // Begin order preparation
    jobDescription.deliver(); // Execute the delivery based on the specific type
    jobDescription.success(); // Confirm successful delivery
  }
  
  // Example 1: Creating a Zomato employee and processing their delivery
  const yuvaraj = new Zomato();
  Clientcode(yuvaraj);
  
  // Example 2: Creating a Swiggy employee and processing their delivery
  const hemnaath = new Swiggy();
  Clientcode(hemnaath);
  