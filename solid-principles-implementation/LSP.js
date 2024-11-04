// Liskov Substitution Principle (LSP)
// The Liskov Substitution Principle states that objects of a superclass 
// should be replaceable with objects of a subclass without affecting the 
// correctness of the program. This means subclasses should not override 
// or alter the expected functionality of the base class.

class Bird {
    // This class represents a general bird behavior.
    
    lays() {
        // Method representing the bird's reproduction behavior.
        console.log("Lays eggs to reproduce its race.");
    }
}

// Subclass representing birds that can fly.
class FlyableBird extends Bird {
    // This class extends Bird to add flying behavior.
    
    fly() {
        // Method specific to flying birds.
        console.log("Flying!"); // Outputs: "Flying!"
    }
}

// Subclass representing penguins, which are birds but cannot fly.
class Penguin extends Bird {
    // This class extends Bird but does not add flying behavior.

    swim() {
        // Method specific to penguins.
        console.log("Swimming!"); // Outputs: "Swimming!"
    }
}

// Creating an instance of FlyableBird.
const flyableBird = new FlyableBird();
flyableBird.lays(); // Outputs: "Lays eggs to reproduce its race."
flyableBird.fly(); // Outputs: "Flying!"

// Creating an instance of Penguin.
const penguin = new Penguin();
penguin.lays(); // Outputs: "Lays eggs to reproduce its race."
penguin.swim(); // Outputs: "Swimming!"

// Summary:
// - The Bird class defines general behavior for all birds.
// - The FlyableBird subclass adds flying behavior, adhering to LSP.
// - The Penguin subclass does not implement flying, which is appropriate 
//   since penguins cannot fly, thus maintaining the integrity of the Bird class.
// - Both subclasses can be used interchangeably as instances of Bird,
//   fulfilling the requirements of the Liskov Substitution Principle.
