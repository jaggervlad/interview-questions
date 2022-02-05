// function findLargestProductArray(array) {
//   let largestProduct = array[0] * array[1];

//   for (let i = 0; i < array.length - 1; i++) {
//     const currentProduct = array[i] * array[i + 1];

//     if (currentProduct > largestProduct) {
//       largestProduct = currentProduct;
//     }
//   }

//   return largestProduct;
// }

// With reduce

function findLargestProductArray(arr) {
  return arr.reduce((acc, current, index) => {
    const nextNum = arr[index + 1];
    if (nextNum === undefined) return acc;

    const actualProduct = current * nextNum;
    acc = actualProduct > acc || acc === null ? actualProduct : acc;

    return acc;
  }, null);
}

const items = [2, -5, 1, -10, 6];
console.log(findLargestProductArray(items));
