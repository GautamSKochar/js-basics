// Input: 5
// 5*4*3*2*1 = 120

const factorial = function (n) {
  if (n == 0 || n == 1) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(5));

const factorialNonRecursive = function (n) {
  if (isNaN(n)) return "not a number";
  let result = 1;
  if (n == 0 || n == 1) return 1;
  for (let i = n; i > 1; i--) {
    result = result * n;
    n--;
  }

  return result;
};
console.log(factorialNonRecursive(7));
