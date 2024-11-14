 // Singleton Pattern ensures that a class has only one instance and provides a global point of access to it
class Singleton {
    constructor() {
      // Check if an instance of Singleton already exists
      if (Singleton.instance) {
        // If an instance exists, return the existing instance
        return Singleton.instance;
      }
  
      // If no instance exists, create a new one
      // Assign a random number (3 digits) as the "value" for this instance
      this.value = Math.floor(Math.random() * 900) + 100;
  
      // Store the instance as a static property on the class so that subsequent instances can access it
      Singleton.instance = this;
    }
  
    // Method to get the "connection" (the value of this instance)
    getConnection() {
      return this.value;
    }
  }
  
  // Usage: Create the first Singleton instance (the only instance allowed)
  const dbConnection1 = new Singleton();
  console.log(dbConnection1.getConnection()); // Logs the connection value of the first instance
  
  // Trying to create another instance will return the same instance as the first one
  const dbConnection2 = new Singleton();
  console.log(dbConnection2.getConnection()); // Logs the same connection value as the first instance
  
  // Check if both instances are the same
  console.log(dbConnection1 === dbConnection2); // true: both are the same instance
  