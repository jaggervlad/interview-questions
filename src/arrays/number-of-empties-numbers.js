function solution(statues) {
  // Sort the array in ascending order
  statues.sort((a, b) => a - b);

  // Initialize count of additional statues needed
  let count = 0;

  // Iterate through the sorted array
  for (let i = 1; i < statues.length; i++) {
    const diff = statues[i] - statues[i - 1];
    if (diff > 1) {
      count += diff - 1;
    }
  }

  return count;
}

// Example usage:
const statues = [6, 2, 3, 8];
const result = solution(statues);
console.log(result); // Output will be 3

// Pregunta Tecnina Ciudadela
