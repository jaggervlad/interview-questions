function diagonalDifference(arr) {
  // Write your code here
  let leftToRightSum = 0;
  let rightToLeftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][i] !== undefined) {
      leftToRightSum += arr[i][i];
    }

    if (arr[i][arr.length - 1 - i] !== undefined) {
      rightToLeftSum += arr[i][arr.length - 1 - i];
    }
  }

  return Math.abs(leftToRightSum - rightToLeftSum);
}

const arrDia = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

console.log(diagonalDifference(arrDia));
