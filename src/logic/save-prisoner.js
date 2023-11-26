function saveThePrisoner(n, m, s) {
  // Calculate the remaining sweets after distributing to full rounds of prisoners
  const remainingSweets = m % n;

  // Calculate the final chair number by starting from the initial chair number
  // and adjusting for the remaining sweets
  let finalChair = (s + remainingSweets - 1) % n;

  // If the result is 0, it means the last chair should be warned
  finalChair = finalChair === 0 ? n : finalChair;

  return finalChair;
}

// Example usage
const testCases = [[5, 2, 1]];

testCases.forEach(([n, m, s]) => {
  console.log(saveThePrisoner(n, m, s));
});
