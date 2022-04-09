// Execution context ==> Stack (Syncronous code execution)
// Browser API (timeout fetch, eventlandlers, geolocation...)
// Callback queue
// Microtask queue (Take precedence over callback queue)

console.log("Test start");
setTimeout(() => console.log("0 sec timer"), 0); // Callback queue
Promise.resolve("Resolve promise 1").then((res) => console.log(res)); // Microtask queue

// // Uncomment below to see mirrotask queue always takes priority
// Promise.resolve("Resolve promise 2").then((res) => {
//   // Simulating for microtask queue so it need more time to execute
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

console.log("Test end");
