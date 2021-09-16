//  Merge sort uses divide and conquer recursive methodology to sort an array.
/**
 * Conceptually, a merge sort works as follows:
 * Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
 * Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.
 */
function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let mid = parseInt(array.length / 2);
  let leftArr = mergeSort(array.slice(0, mid));
  let rightArr = mergeSort(array.slice(mid));
  return mergeHelper(leftArr, rightArr);
}

function mergeHelper(arr1, arr2) {
  let i = 0;
  let j = 0;
  let meredArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      meredArray.push(arr2[j]);
      j++;
    } else {
      meredArray.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    meredArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    meredArray.push(arr2[j]);
    j++;
  }
  return meredArray;
}

const input = [12, 434, 3, 655, 99, 0, 1, 7, 9];
console.log(mergeSort(input));
