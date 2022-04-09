// Javascript program to find largest
// pair sum in a given array

/* Method to return largest pair
    sum. Assumes that there are
    at-least two elements in arr[] */

function findLargestSumPair(arr) {
  let firstMax, secondMax;
  if (!arr.length) return 0;
  if (arr.length < 2) return arr[1];
  if (arr[0] > arr[1]) {
    firstMax = arr[0];
    secondMax = arr[1];
  } else {
    firstMax = arr[1];
    secondMax = arr[0];
  }
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== firstMax) {
      secondMax = arr[i];
    }
  }
  return firstMax + secondMax;
}

let arr1 = [12, 34, 10, 6, 40];
console.log("Max Pair Sum is " + findLargestSumPair(arr1));
