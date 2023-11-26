function findMex(arr) {
  arr.sort((a, b) => a - b);

  return arr.reduce((mex, value) => {
    if (value === mex) {
      mex++;
    }
    return mex;
  }, 0);
}

const arraOfNumber = [0, 10, 2, 8, 5, 7, 9, 1];
const result = findMex(arraOfNumber);

console.log(result);
