/* Key Concept: Any function always has access to the varible environment of
 * the execution context in which the function was created even after that EC is gone.

 * Closure have priority over scope chain ( so if a same var is declared in GEC then it will check in closure before then in GEC)

 * Closure Def 1: VE attached to the function, exaclty as it was at the time and place the function was created.
 * Closure Def 2: A closure is the close-over variable environment of theh execution context
 * in which a function was created, even after that execution context is gone. 
 */

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
// console.dir(booker);  Check in scopes ==> closure

// ------------------------------------------------------------------
// #2
let f;
const g = function () {
  const a = 24;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
// console.dir(f);
// R-assingning f function
h();
f();
// console.dir(f);

// ------------------------------------------------------------------
// #3
// Settimeout has access to VE where it was declared.
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 1000; // setting global but closue give priority over scope chain.
boardPassengers(180, 3);
