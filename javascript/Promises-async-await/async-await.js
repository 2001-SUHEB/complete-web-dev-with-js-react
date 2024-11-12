// === ASYNC/AWAIT STUDY MATERIAL ===

// ASYNC/AWAIT is a modern way to handle asynchronous operations in JavaScript, built on promises but with a more synchronous look and feel.
// Async/await makes code easier to read and manage, avoiding "promise chains" and improving readability.

// =======================
// TOPIC: BASIC ASYNC FUNCTION
// =======================
async function fetchData() {
  // 'await' pauses execution until the promise is resolved
  const API = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response = await fetch(API);
    const data = await response.json();
    console.log("Data fetched:", data);
  } catch (err) {
    console.error("Fetch error:", err);
  }
}
fetchData();

// OUTPUT:
// Logs fetched data from the API, or logs an error if the fetch fails.

// =======================
// TOPIC: DIFFERENCE BETWEEN ASYNC/AWAIT AND PROMISES WITH .THEN()
// =======================
const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1 resolved"), 5000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 2 resolved"), 3000);
});

// Using Promises with .then() method
function handleWithThen() {
  p1.then((data) => console.log(data));
  p2.then((data) => console.log(data));
  console.log("This logs immediately, showing asynchronous behavior.");
}
handleWithThen();

// Using async/await
async function handleWithAsync() {
  const data1 = await p1;
  console.log(data1); // Logs after p1 resolves
  const data2 = await p2;
  console.log(data2); // Logs after p2 resolves
  console.log("Await pauses execution until each promise resolves.");
}
handleWithAsync();

// =======================
// TOPIC: PROMISE METHODS WITH ASYNC/AWAIT
// =======================

// === Promise.all: Waits until all promises in the array have resolved ===
async function usePromiseAll() {
  try {
    const results = await Promise.all([p1, p2]);
    console.log("Promise.all resolved:", results);
  } catch (err) {
    console.error("Promise.all rejected:", err);
  }
}
usePromiseAll();

// OUTPUT:
// Logs an array of resolved values if all promises succeed,
// or catches an error if any promise rejects.

// === Promise.allSettled: Waits until all promises have settled (either resolved or rejected) ===
async function usePromiseAllSettled() {
  const results = await Promise.allSettled([p1, p2]);
  console.log("Promise.allSettled results:", results);
}
usePromiseAllSettled();

// OUTPUT:
// Logs an array of objects showing status and value or reason of each promise, regardless of outcome.

// === Promise.race: Returns the first resolved or rejected promise ===
async function usePromiseRace() {
  try {
    const result = await Promise.race([p1, p2]);
    console.log("Promise.race resolved:", result);
  } catch (err) {
    console.error("Promise.race rejected:", err);
  }
}
usePromiseRace();

// OUTPUT:
// Logs the result of the first promise to settle (resolve or reject).

// === Promise.any: Returns the first promise that resolves successfully ===
async function usePromiseAny() {
  try {
    const result = await Promise.any([p1, p2]);
    console.log("Promise.any resolved:", result);
  } catch (err) {
    console.error("Promise.any rejected:", err);
  }
}
usePromiseAny();

// OUTPUT:
// Logs the first resolved promise or rejects if all promises fail.

// =======================
// TOPIC: ERROR HANDLING IN ASYNC/AWAIT
// =======================
async function fetchWithErrorHandling() {
  try {
    const invalidAPI = "https://invalid.api.endpoint";
    const response = await fetch(invalidAPI);
    const data = await response.json();
    console.log("Data:", data);
  } catch (err) {
    console.error("Error occurred during fetch:", err);
  }
}
fetchWithErrorHandling();

// OUTPUT:
// Logs an error message if the fetch request fails.

// =======================
// TOPIC: MIXING SYNC AND ASYNC CODE
// =======================
function normalFunction() {
  console.log("This runs first in synchronous code.");
  const p = new Promise((resolve) =>
    setTimeout(() => resolve("Promise resolved"), 2000)
  );
  p.then((data) => console.log("Async data:", data));
  console.log("This runs while promise is still pending.");
}
normalFunction();

// OUTPUT:
// Logs "This runs first" and "This runs while promise is still pending" immediately.
// Logs "Promise resolved" after the promise resolves, showing async behavior.

// =======================
// TOPIC: RETURNING VALUES FROM ASYNC FUNCTIONS
// =======================
async function getData() {
  return "Success!";
}
const dataPromise = getData();
dataPromise.then((data) =>
  console.log("Returned data from async function:", data)
);

// OUTPUT:
// Logs "Success!" showing that async functions always return a promise.

// =======================
// TOPIC: ASYNC FUNCTION WITH A RETURNED ERROR
// =======================
async function getErrorData() {
  return new Error("Something went wrong");
}
const errorPromise = getErrorData();
errorPromise
  .then((data) => console.log("Data:", data))
  .catch((err) => console.error("Error:", err));

// OUTPUT:
// Logs the Error object to the console, showing that async functions return errors as resolved values, not thrown errors.
