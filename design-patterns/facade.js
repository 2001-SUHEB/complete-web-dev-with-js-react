// Facade Pattern Definition:
// The Facade Pattern is a structural design pattern that provides a simplified interface to a complex
// subsystem of classes, hiding the complexity of the system. The facade provides a unified interface
// to a set of interfaces in a subsystem, making it easier to interact with the system without needing
// to understand its inner workings.

// Subsystem Class: Bulb
// Represents a specific subsystem (Bulb), with methods to turn on and off
class Bulb {
  on() {
    console.log("Bulb is turned on");
  }
  off() {
    console.log("Bulb is turned off");
  }
}

// Subsystem Class: Computer
// Represents another subsystem (Computer), with methods to turn on and off
class Computer {
  on() {
    console.log("Computer is turned on");
  }
  off() {
    console.log("Computer is turned off");
  }
}

// Subsystem Class: Microwave
// Represents another subsystem (Microwave), with methods to turn on and off
class Microwave {
  on() {
    console.log("Microwave is turned on");
  }
  off() {
    console.log("Microwave is turned off");
  }
}

// Facade Class: HomeAutomation
// The HomeAutomation class provides a simplified interface for controlling all subsystems (appliances)
// It consolidates the interactions with individual subsystems into unified start and stop methods
class HomeAutomation {
  constructor() {
    console.log("Starting home automation system...");
    console.log("-------------------------------------");
    this.bulb = new Bulb(); // Initializes Bulb subsystem
    this.computer = new Computer(); // Initializes Computer subsystem
    this.microwave = new Microwave(); // Initializes Microwave subsystem
  }

  // Unified method to turn on all appliances
  startHome() {
    console.log("-------------------------------------");
    console.log("Turning on all appliances...");
    console.log("-------------------------------------");
    this.bulb.on();
    this.computer.on();
    this.microwave.on();
    console.log("-------------------------------------");
  }

  // Unified method to turn off all appliances
  stopHome() {
    console.log("Turning off all appliances...");
    console.log("-------------------------------------");
    this.bulb.off();
    this.computer.off();
    this.microwave.off();
    console.log("-------------------------------------");
  }
}

// Client Code
// The client interacts with the HomeAutomation facade instead of directly controlling each appliance.
// This makes it easier to manage the entire home system through a simple interface.
const control = new HomeAutomation();
control.startHome(); // Turns on all appliances
control.stopHome(); // Turns off all appliances
