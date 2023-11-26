function calculateIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [v1, v2] = intervals[i];
    const lastAdded = result[result.length - 1];
    const [l1, l2] = lastAdded;

    if (l2 >= v1) {
      result[result.length - 1] = [l1, Math.max(v2, l2)];
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
}
//
const testCalculateIntervals = [
  [1, 2],
  [2, 4],
  [1, 5],
];
console.log('calculateInterval', calculateIntervals(testCalculateIntervals));
