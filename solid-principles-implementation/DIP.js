// Dependency Inversion Principle (DIP) Study Material

/**
 * Definition of Dependency Inversion Principle (DIP):
 * High-level modules should not depend on low-level modules; both should depend on abstractions.
 * This principle promotes loose coupling between software components, making them more flexible and easier to maintain.
 */

// Low-level module that handles data saving
class Database {
    // Method to save data
    save(data) {
        console.log(`Saving data into database --- ${data}`);
    }
}

// Another low-level module for testing purposes
class MockDatabase {
    // Mock method to simulate data saving
    save(data) {
        console.log(`Pretending to save data into database --- ${data}`);
    }
}

// High-level module that uses a database to save data
class UserService {
    // Constructor accepts a database instance (could be real or mock)
    constructor(db) {
        this.db = db; // Assigning the passed database instance to this.db
    }

    // Method to save data using the provided database instance
    save(data) {
        this.db.save(data); // Delegates the save operation to the database instance
    }
}

// Instantiating the real database
const realDb = new Database();
// Instantiating the mock database for testing
const mockDb = new MockDatabase();

// Creating an instance of UserService with the mock database
const emp = new UserService(mockDb);

// Saving data using UserService, which uses the mock database
emp.save("suheb"); // Outputs: "Pretending to save data into database --- suheb"

// If we want to switch to the real database, we can easily do so:
const empWithRealDb = new UserService(realDb);
empWithRealDb.save("john"); // Outputs: "Saving data into database --- john"
