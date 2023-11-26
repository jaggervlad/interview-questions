function miniMaxSum(arr) {
  // Write your code here

  const totalSum = arr.reduce((acc, val) => (acc += val), 0);
  const arrResults = [];

  for (let i = 0; i < arr.length; i++) {
    arrResults.push(totalSum - arr[i]);
  }

  const sortedArr = [...arrResults].sort((a, b) => a - b);
  const minSum = Math.min(...arrResults);
  const maxSum = Math.max(...arrResults);

  console.log({ sortedArr, minSum, maxSum });
}

miniMaxSum([1, 2, 3, 4, 5]);
