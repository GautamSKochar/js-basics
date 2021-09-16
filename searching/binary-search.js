// [2,3,4,5,6,7]

function binarySearch(arr, number) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = parseInt(start + end) / 2;
    if (number === arr[start]) {
      return start;
    } else if (number === arr[mid]) {
      return mid;
    } else if (number === arr[end]) {
      return end;
    }

    if (number < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([24, 31, 45, 74, 89, 94], 74));
