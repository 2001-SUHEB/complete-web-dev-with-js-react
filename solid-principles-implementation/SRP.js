// Single Responsibility Principle (SRP)
// The Single Responsibility Principle states that a class should have only one reason to change.
// In other words, a class should only have one job or responsibility. 

// User class is responsible for user-related data and behavior.
class User {
    constructor(email) {
        this.email = email; // Initialize the user's email
    }

    getEmail() {
        return this.email; // Return the user's email
    }
}

// MailService class is responsible for sending emails.
class MailService {
    sendGreetMail(user) {
        // Send a greeting email to the user
        console.log(`Sending Greeting Mail to ${user.getEmail()}`);
    }
}

// Usage example:

// Create a new User instance
const emp = new User("syed@gmail.com");

// Create a new MailService instance
const service = new MailService();

// Use the MailService to send a greeting email to the user
service.sendGreetMail(emp);