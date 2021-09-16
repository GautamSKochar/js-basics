// Selecting the min value in the list and swapping it with the first value in the list and so on until its reaches end of the list.

function selectionSort(array) {
  const arr = array.slice();
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    // const temp = arr[i];
    // arr[i] = arr[minIndex];
    // arr[minIndex] = temp;
  }
  return arr;
}

const input = [12, 434, 3, 655, 99, 0, 1, 7, 9];
console.log(selectionSort(input));
// Do not mutate original input
// console.log(input);
