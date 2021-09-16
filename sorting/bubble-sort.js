// Bigger number bubble up
// In first iteration we lock the highest number to last position and so on for next iteration...

function bubbleSort(array) {
  const arr = array.slice();
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const input = [12, 434, 3, 655, 99, 0, 1, 7, 9];
console.log(bubbleSort(input));
// Do not mutate original input
// console.log(input);
