# Design Patterns in Software Engineering 💻

Design patterns are **reusable solutions** to common software design problems. They help improve code readability, scalability, and maintainability. Below are the key **types** of design patterns, explained in a simple and concise way.

---

## Types of Design Patterns 🛠️

### 1. **Creational Patterns** 🌱
Creational patterns deal with object creation mechanisms. They abstract the instantiation process and provide flexibility.

- **Singleton** 🧑‍🤝‍🧑: Ensures a class has only one instance.
- **Factory Method** 🏭: Creates objects without specifying the exact class.
- **Abstract Factory** 🏭🛠️: Creates families of related objects.
- **Builder** 🛠️: Constructs complex objects step-by-step.
- **Prototype** 🧳: Creates new objects by copying an existing one.

### 2. **Structural Patterns** 🏗️
These patterns deal with how classes and objects are composed to form larger structures.

- **Adapter** 🔌: Converts one interface to another.
- **Bridge** 🌉: Decouples abstraction and implementation.
- **Composite** 🌿: Allows single objects and compositions of objects to be treated uniformly.
- **Decorator** 🎨: Adds functionality to an object dynamically.
- **Facade** 🏢: Provides a simplified interface to a complex subsystem.
- **Flyweight** 💨: Reduces memory usage by sharing common objects.
- **Proxy** 🛡️: Provides a surrogate or placeholder for another object.

### 3. **Behavioral Patterns** 🧠
Behavioral patterns focus on the interaction and responsibility of objects.

- **Observer** 👀: Notifies multiple objects when one object changes.
- **Strategy** ⚙️: Allows selecting a method at runtime.
- **Command** 📜: Encapsulates a request as an object.
- **State** 🏁: Changes an object’s behavior based on its state.
- **Chain of Responsibility** 🔗: Passes a request along a chain of handlers.
- **Mediator** 🗣️: Centralizes communication between objects.
- **Memento** 📸: Captures the state of an object for later restoration.
- **Template Method** 📝: Defines steps of an algorithm, allowing flexibility in steps.
- **Iterator** 🧭: Iterates over elements in a collection.
- **Visitor** 🧑‍🔬: Allows adding operations without changing the objects.

---

## Why Use Design Patterns? 🤔

- **Code Reusability**: Write once, use many times.
- **Maintainability**: Simplifies updates and bug fixes.
- **Efficiency**: Reduces the time needed to solve common design problems.
- **Scalability**: Easily scale applications using established patterns.
- **Communication**: Developers can quickly understand each other by referring to known patterns.

---

## Example: Singleton Pattern 🧑‍🤝‍🧑

Here is an example of the **Singleton** pattern:

```javascript
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance; // Return the existing instance
        }\
        this.value = Math.random(); // Assign a random value to the instance
        Singleton.instance = this; // Store the instance
    }

    getValue() {
        return this.value;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1.getValue()); // Same value as instance2
console.log(instance1 === instance2); // true (both are the same instance)
\