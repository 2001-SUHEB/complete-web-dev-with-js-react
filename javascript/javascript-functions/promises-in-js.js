// JavaScript Async Programming Study Material

// ========== TOPIC: CALLBACK HELL ==========
// Callback hell occurs when we nest multiple asynchronous functions,
// each depending on the result of the previous function. This often
// happens when handling asynchronous operations (e.g., creating an order,
// processing payment, updating order info). It leads to deeply nested code,
// which is hard to read and maintain. This structure is sometimes called
// "Pyramid of Doom" due to its shape.

// Example of callback hell:

/*
const cart = ["Brush", "Toys", "Games"];

createOrder(cart, function (orderId) {
  paymentGateway(orderId, function (orderInfo) {
    orderSummary(orderInfo, function () {
      updateWallet();
    });
  });
});
*/

// Problems with callback hell:
// - Unreadable and hard to debug as complexity grows.
// - Inversion of control: We pass control to external functions, trusting them
//   to behave as expected, which could lead to unexpected results.

// ========== TOPIC: PROMISES ==========
// Promises in JavaScript provide a way to handle asynchronous operations
// more gracefully, avoiding callback hell. A Promise represents the eventual
// result of an asynchronous operation. It can be in one of three states:
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: Operation completed successfully.
// 3. Rejected: Operation failed.

// Syntax to create a Promise:
// const promise = new Promise((resolve, reject) => {
//   // async task
//   if (taskSuccessful) {
//     resolve(result);
//   } else {
//     reject(error);
//   }
// });

// ========== EXAMPLE OF PROMISE CHAINING ==========
// Promise chaining allows us to handle a sequence of asynchronous tasks in a cleaner way
// by returning another promise in each `.then()` method.
// Here is an example using promises to handle cart operations:

const cart = ["Brush", "Toys", "Games"];

// Using promises to avoid callback hell:
// The example uses promise chaining to handle each asynchronous operation in sequence,
// making the code cleaner and more readable.

createOrder(cart) // Starts the order creation process and returns a promise with the orderId
  .then((orderId) => paymentGateway(orderId)) // Passes the orderId to the paymentGateway
  .then((orderInfo) => orderSummary(orderInfo)) // Takes the result of payment and generates order summary
  .then(() => updateWallet()) // Updates the wallet after order completion
  .catch((error) => {
    console.error("An error occurred during the order process:", error); // Handles any errors in the chain
  });

// Explanation of each step:
// - `.then()` method is used to handle the resolved value of the previous promise.
// - Each function (createOrder, paymentGateway, orderSummary, updateWallet) returns a promise,
//   allowing us to continue chaining `.then()` blocks for each step.
// - `.catch()` at the end handles any errors that might occur at any step in the chain.

// ========== DEFINITION OF EACH FUNCTION ==========
// Each function below is a placeholder to represent an async task that returns a promise:

// Simulates order creation
function createOrder(cart) {
  return new Promise((resolve, reject) => {
    console.log("Creating order for", cart);
    setTimeout(() => {
      const orderId = Math.floor(Math.random() * 1000); // Generate a random order ID
      resolve(orderId); // Resolve with the order ID
    }, 1000);
  });
}

// Simulates payment processing
function paymentGateway(orderId) {
  return new Promise((resolve, reject) => {
    console.log("Processing payment for order", orderId);
    setTimeout(() => {
      const orderInfo = { orderId, paymentStatus: "Success" };
      resolve(orderInfo); // Resolve with order info
    }, 1000);
  });
}

// Simulates order summary generation
function orderSummary(orderInfo) {
  return new Promise((resolve, reject) => {
    console.log("Generating order summary for", orderInfo);
    setTimeout(() => {
      resolve(); // Resolve without any value
    }, 1000);
  });
}

// Simulates wallet update
function updateWallet() {
  return new Promise((resolve, reject) => {
    console.log("Updating wallet balance");
    setTimeout(() => {
      resolve(); // Resolve without any value
    }, 1000);
  });
}

// ========== ADDITIONAL TOPICS ON PROMISES ==========

// Handling Errors:
// - Promises allow centralized error handling with `.catch()`, unlike callbacks where error handling
//   can become complex in nested structures.
// - Placing `.catch()` at the end of a chain catches errors from any previous step.

// Promise.all:
// - Promise.all is used to run multiple promises in parallel and wait until all are completed.
// - If any promise fails, Promise.all rejects with that error.
// Example:
// const promises = [fetchUser(), fetchOrders(), fetchPayments()];
// Promise.all(promises).then(results => {
//   console.log(results); // Array of results from each promise
// }).catch(error => console.error("One or more promises failed:", error));

// Async/Await:
// - Async/await syntax is a modern alternative to promises, making async code look synchronous.
// - An async function automatically returns a promise, and `await` pauses execution until the promise is resolved.
// Example:
// async function processOrder() {
//   try {
//     const orderId = await createOrder(cart);
//     const orderInfo = await paymentGateway(orderId);
//     await orderSummary(orderInfo);
//     await updateWallet();
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }
// processOrder();

// Summary:
// - Promises help avoid callback hell by improving code structure with .then() chaining and error handling with .catch().
// - Promises allow us to compose async code, handle errors effectively, and improve readability.
// - Async/await builds on promises to make async code even cleaner, easier to read, and maintainable.
