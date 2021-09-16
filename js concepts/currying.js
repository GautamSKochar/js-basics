function sum(a, b, c) {
  return a + b + c;
}

function curry(func) {
  //   return curried; // this will also work
  return function (...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curriedSum.apply(this, args.concat(args2));
      };
    }
  };
}

// function curried(...args) {
//   if (args.length >= sum.length) {
//     // (1)
//     return sum.apply(this, args);
//   } else {
//     return function (...args2) {
//       // (2)
//       return curried.apply(this, args.concat(args2));
//     };
//   }
// }

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1, 2)(3)); // 6, currying of 1st & 2nd arg
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)); // 6, full currying
