// In this exercise, you have to analyze records of temperature
// to find the closest to zero. Sample temperatures. Here, -1.7 is the closest
// to 0. Implement the function closestToZero to return the temperature closer
// to zero which belongs to the array ts.

// If ts is empty, return 0 (zero).
// If two numbers are as close to zero, consider the positive number as the closest to zero (eg. if ts contains -5 and 5, return 5).

// Input:

// Temperatures are always expressed with floating-point numbers ranging from -273 to 5526.
// ts is always a valid array and is never null.

// function closestToZero(numbers) {
//   if (!numbers.length) return 0;

//   let closest = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (closest === 0) {
//       closest = numbers[i];
//     } else if (numbers[i] > 0 && numbers[i] <= Math.abs(closest)) {
//       closest = numbers[i];
//     } else if (numbers[i] < 0 && -numbers[i] < Math.abs(closest)) {
//       closest = numbers[i];
//     }
//   }

//   return closest;
// }

// Other solution
function closestToZero(numbers) {
  if (numbers.length === 0) return 0;

  let closest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let absNumber = Math.abs(number);
    let absClosest = Math.abs(closest);

    if (absNumber < absClosest) {
      closest = number;
    } else if (absNumber === absClosest && closest < 0) {
      closest = number;
    }
  }

  return closest;
}

let items = [
  7, -10, 13, 8, 4, -7.2, -12, -3.7, 3.5, -9.6, 6.5, -1.7, -6.2, 7, 1.7, 1,
  -0.75,
];
// Result: -1.7
console.log('Result: ' + closestToZero(items));

items = [5, 6, 7, 9, 2, -2];
// Result: 2
console.log('Result: ' + closestToZero(items));

items = [];
// Result: 0
console.log('Result: ' + closestToZero(items));
