// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].

function solution(inputArray) {
  let longestLength = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longestLength) {
      longestLength = inputArray[i].length;
    }
  }

  let longestStrings = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === longestLength) {
      longestStrings.push(inputArray[i]);
    }
  }

  return longestStrings;
}
