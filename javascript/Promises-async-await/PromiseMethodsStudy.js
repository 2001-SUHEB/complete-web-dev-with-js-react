// Filename: PromiseMethodsStudy.js

// Definitions of each Promise method used below:
// 1. **Promise.all** - Waits for all promises to resolve; if any promise rejects, it immediately rejects with that error.
// 2. **Promise.allSettled** - Waits for all promises to either resolve or reject; returns an array of each promise's result status.
// 3. **Promise.race** - Resolves or rejects as soon as the first promise resolves or rejects, whichever happens first.
// 4. **Promise.any** - Resolves as soon as any promise resolves; if all promises reject, it rejects with an AggregateError.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p1 resolved");
    reject("p1 rejected");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p2 resolved");
    reject("p2 rejected");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p3 resolved");
    reject("p3 rejected");
  }, 1000);
});

// Promise.all: Rejects immediately if any promise is rejected.
Promise.all([p1, p2, p3])
  .then((msg) => console.log("Promise.all resolved:", msg))
  .catch((err) => console.log("Promise.all rejected:", err));

// Expected output after 1 second (when p3 rejects):
// Promise.all rejected: p3 rejected

// Promise.allSettled: Waits for all promises to settle, regardless of resolve or reject.
Promise.allSettled([p1, p2, p3])
  .then((msg) => console.log("Promise.allSettled results:", msg))
  .catch((err) => console.log(err));

// Expected output after 3 seconds:
// Promise.allSettled results:
// [
//   { status: 'rejected', reason: 'p1 rejected' },
//   { status: 'rejected', reason: 'p2 rejected' },
//   { status: 'rejected', reason: 'p3 rejected' }
// ]

// Promise.race: Resolves or rejects as soon as the first promise resolves or rejects.
Promise.race([p1, p2, p3])
  .then((msg) => console.log("Promise.race resolved:", msg))
  .catch((err) => console.log("Promise.race rejected:", err));

// Expected output after 1 second (since p3 rejects first):
// Promise.race rejected: p3 rejected

// Promise.any: Resolves as soon as the first promise resolves; rejects only if all promises are rejected.
Promise.any([p1, p2, p3])
  .then((msg) => console.log("Promise.any resolved:", msg))
  .catch((err) => console.log("Promise.any rejected:", err));

// Expected output after 3 seconds (since all promises reject):
// Promise.any rejected: AggregateError: All promises were rejected
