// Interface Segregation Principle (ISP) Example

// Definition of Interface Segregation Principle (ISP):
// A class should not be forced to implement interfaces it doesn’t use. 
// This can be implemented in JavaScript by creating smaller, focused classes or objects 
// that only contain the required functionality.

class Coder {
    // Method for coding action
    code() {
        console.log("Coding..."); // Output when coding
    }
}

class Designer {
    // Method for design action
    design() {
        console.log("Designing..."); // Output when designing
    }
}

class Tester {
    // Method for test action
    test() {
        console.log("Testing..."); // Output when testing
    }
}

// Creating an instance of Coder
const jsdev = new Coder();

// Calling the code method on the Coder instance
jsdev.code(); // This will log "Coding..." to the console
