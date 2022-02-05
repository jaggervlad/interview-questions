// How to find the minimum difference between 2 numbers inside an array
// of n size (find smallest interval) in JS

// // Method 1
// function findSmallestInterval(arr, n) {
//   let diff = Number.MAX_VALUE;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (Math.abs(arr[i] - arr[j]) < diff) {
//         diff = Math.abs(arr[i] - arr[j]);
//       }
//     }
//   }

//   return diff;
// }

// Method 2
function findSmallestInterval(arr, n) {
  arr.sort(function (a, b) {
    return a - b;
  });

  let diff = Number.MAX_VALUE;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i + 1] - arr[i] < diff) {
      diff = arr[i + 1] - arr[i];
    }
  }

  return diff;
}

const items = [1, 5, 3, 19, 18, 25, -4, 75];

console.log(findSmallestInterval(items, items.length));
