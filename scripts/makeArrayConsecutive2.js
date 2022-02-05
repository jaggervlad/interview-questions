// function makeConsecutiveArray2(statues) {
//   const length = statues.length;
//   let diff = 0;
//   statues.sort((a, b) => a - b);

//   for (var i = 0; i < length - 1; i++) {
//     diff += statues[i] - statues[i + 1] + 1;
//   }

//   return Math.abs(diff);
// }

// other method
const makeConsecutiveArray2 = (statues) =>
  Math.max(...statues) - Math.min(...statues) + 1 - statues.length;

const statues = [1, 4, 8];

console.log(makeConsecutiveArray2(statues));
