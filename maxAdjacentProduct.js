function solution(inputArray) {
  let maxNumber = -Infinity;
  const length = inputArray.length;

  for (let i = 0; i < length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];

    maxNumber = Math.max(maxNumber, product);
  }

  return maxNumber;
}
