function solution(sequence) {
  let count = 0; // Initialize a count of elements to be removed

  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;

      if (
        count > 1 ||
        (i > 1 &&
          sequence[i] <= sequence[i - 2] &&
          i < sequence.length - 1 &&
          sequence[i + 1] <= sequence[i - 1])
      ) {
        return false; // More than one element needs to be removed or it's not possible to fix with one removal
      }
    }
  }

  return true; // If we reach here, at most one element needs to be removed
}

// Example usage:
const sequence = [1, 2, 3, 4, 5, 3, 5, 6];
const result = solution(sequence);
console.log(result); // Output will be false
