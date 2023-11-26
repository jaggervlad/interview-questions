/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".
*/

function solution(s1, s2) {
  // Create arrays to store character frequencies for each string
  const freq1 = new Array(26).fill(0);
  const freq2 = new Array(26).fill(0);

  // Count character frequencies in the first string
  for (let char of s1) {
    freq1[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  // Count character frequencies in the second string
  for (let char of s2) {
    freq2[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  // Initialize a variable to keep track of common characters count
  let commonCount = 0;

  // Compare character frequencies to find common characters
  for (let i = 0; i < 26; i++) {
    commonCount += Math.min(freq1[i], freq2[i]);
  }

  return commonCount;
}

let s1 = 'abca',
  s2 = 'xyzbac';

console.log(solution(s1, s2));
