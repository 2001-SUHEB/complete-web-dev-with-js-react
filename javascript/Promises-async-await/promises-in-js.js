// JavaScript Async Programming Study Material

// ========== TOPIC: CALLBACK HELL ==========
// Callback hell occurs when we nest multiple asynchronous functions in a sequence,
// each depending on the result of the previous function. This creates deeply nested code
// that is hard to read, maintain, and debug. It often appears like a "Pyramid of Doom."

// Example of Callback Hell:
const cart = ["Brush", "Toys", "Games"];

createOrder(cart, function (orderId) {
  paymentGateway(orderId, function (orderInfo) {
    orderSummary(orderInfo, function () {
      updateWallet();
    });
  });
});

// Problems with Callback Hell:
// - **Unreadable Code**: Hard to debug as complexity grows.
// - **Inversion of Control**: Control is passed to external functions, which can be risky.

// ========== TOPIC: PROMISES ==========
// Promises help handle asynchronous operations more cleanly, avoiding callback hell.
// A Promise represents the eventual result of an asynchronous operation and can be in one of three states:
// 1. **Pending**: Initial state, neither fulfilled nor rejected.
// 2. **Fulfilled**: Operation completed successfully.
// 3. **Rejected**: Operation failed.

// Syntax for a Promise:
const promise = new Promise((resolve, reject) => {
  // async task
  const taskSuccessful = true; // Simulate success or failure
  if (taskSuccessful) {
    resolve("Task completed successfully!");
  } else {
    reject("Task failed.");
  }
});

// ========== TOPIC: PROMISE CHAINING ==========
// Promise chaining allows us to handle a sequence of asynchronous tasks in a cleaner way
// by returning another promise in each `.then()` method, making code easier to read.

// Example with Promises to handle cart operations:
createOrder(cart) // Starts order creation and returns a promise with the orderId
  .then((orderId) => paymentGateway(orderId)) // Passes orderId to paymentGateway
  .then((orderInfo) => orderSummary(orderInfo)) // Generates order summary
  .then(() => updateWallet()) // Updates wallet after order completion
  .catch((error) => {
    console.error("Error during the order process:", error); // Handles any errors in the chain
  });

// ========== FUNCTION DEFINITIONS ==========
// Each function represents an asynchronous task returning a promise:

// Simulate order creation
function createOrder(cart) {
  return new Promise((resolve, reject) => {
    console.log("Creating order for", cart);
    setTimeout(() => {
      const orderId = Math.floor(Math.random() * 1000); // Generate a random order ID
      console.log("Order ID:", orderId); // Output
      resolve(orderId);
    }, 1000);
  });
}

// Simulate payment processing
function paymentGateway(orderId) {
  return new Promise((resolve, reject) => {
    console.log("Processing payment for order", orderId);
    setTimeout(() => {
      const orderInfo = { orderId, paymentStatus: "Success" };
      console.log("Order Info:", orderInfo); // Output
      resolve(orderInfo);
    }, 1000);
  });
}

// Simulate order summary generation
function orderSummary(orderInfo) {
  return new Promise((resolve, reject) => {
    console.log("Generating order summary for", orderInfo);
    setTimeout(() => {
      console.log("Order summary generated."); // Output
      resolve();
    }, 1000);
  });
}

// Simulate wallet update
function updateWallet() {
  return new Promise((resolve, reject) => {
    console.log("Updating wallet balance");
    setTimeout(() => {
      console.log("Wallet updated."); // Output
      resolve();
    }, 1000);
  });
}

// ========== ADDITIONAL TOPICS ON PROMISES ==========

// Error Handling with Promises:
// - `.catch()` at the end of a chain catches errors from any previous step, centralizing error handling.

// Example with centralized error handling
createOrder(cart)
  .then((orderId) => paymentGateway(orderId))
  .then((orderInfo) => orderSummary(orderInfo))
  .then(() => updateWallet())
  .catch((error) => {
    console.error("Error:", error); // Output for any error
  });

// Promise.all:
// - Runs multiple promises in parallel and waits until all are completed.
// - If any promise fails, Promise.all rejects with that error.

const promises = [fetchUser(), fetchOrders(), fetchPayments()];
Promise.all(promises)
  .then((results) => {
    console.log("All promises resolved:", results); // Output array of results
  })
  .catch((error) => console.error("One or more promises failed:", error)); // Error output if any promise fails

// ========== ASYNC/AWAIT ==========
// Async/await provides a cleaner way to work with promises by making async code look synchronous.
// An `async` function returns a promise, and `await` pauses execution until the promise is resolved.

async function processOrder() {
  try {
    const orderId = await createOrder(cart);
    const orderInfo = await paymentGateway(orderId);
    await orderSummary(orderInfo);
    await updateWallet();
    console.log("Order processing completed."); // Output
  } catch (error) {
    console.error("Error in async process:", error); // Error output
  }
}
processOrder();

// Summary:
// - Promises help avoid callback hell and improve code readability with `.then()` chaining.
// - Async/await builds on promises, making async code look synchronous and easy to read.
// - `.catch()` centralizes error handling for promises, and `Promise.all` runs tasks in parallel.
