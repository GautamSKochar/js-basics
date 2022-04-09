/* Problem - https://leetcode.com/problems/maximum-number-of-balloons/description/
/**
 * Given a string text, you want to use the characters of text to form as many instances of the word (substring) as possible.
You can use each character in text at most once. Return the maximum number of instances that can be formed.
 */

// Example 2:
// Input: text = "aplplaeepapa"
// Output: 2

const TEXT = "aplplaeepapa";
const SUBSTRING = "apple";

// a: 4, p: 4, l:2, e:2
// MAXFREQ => substring foreach

const charCounter = (str) => {
  let charCount = {};
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (!charCount[element]) {
      charCount[element] = 1;
    } else {
      charCount[element] = charCount[element] + 1;
    }
  }
  return charCount;
};

const finMaxSubstring = (str, subStr) => {
  const textStringCount = charCounter(str);
  const subStringCount = charCounter(subStr);
  let minFreq = 9999;
  Object.keys(subStringCount).forEach((char) => {
    if (!textStringCount[char]) {
      minFreq = 0;
      return;
    }
    let freq = parseInt(textStringCount[char] / subStringCount[char]);
    if (freq < minFreq) {
      minFreq = freq;
    }
  });
  return minFreq;
};

console.log(
  `Max number of substring '${SUBSTRING}' can be formed from string '${TEXT}' is:`,
  finMaxSubstring(TEXT, SUBSTRING)
);
