function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    return -1;
  }
}
const sortedArray = [1, 2, 3, 4, 6, 5, 7, 8, 9].sort();
const targetElement = 5;
const resultIndex = binarySearch(sortedArray, targetElement);

if (resultIndex !== -1) {
  console.log(
    `El elemento ${targetElement} se encuentra en el índice ${resultIndex}`
  );
} else {
  console.log(`El elemento ${targetElement} no se encontró en el array.`);
}
