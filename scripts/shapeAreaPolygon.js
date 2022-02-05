// function shapeArea(n) {
//   console.log(n);
//   if (n === 1) return 1;

//   return shapeArea(n - 1) + (n - 1) * 4;
// }

function shapeArea(n) {
  return 2 * (n * n) - n * 2 + 1;
}

console.log(shapeArea(4));
