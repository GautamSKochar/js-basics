//  Works by building up a sortted array at the beginning selecting the min value in the list
// and swapping it with the first value in the list and so on until its reaches end of the list.

function insertionSort(array) {
  const arr = array.slice();
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

const input = [12, 434, 3, 655, 99, 0, 1, 7, 9];
console.log(insertionSort(input));
// Do not mutate original input
// console.log(input);
