function plusMinus(arr) {
  // Write your code here
  let countPositives = 0;
  let countZeros = 0;
  let countNegatives = 0;

  arr.forEach((num) => {
    if (num === 0) {
      countZeros = ++countZeros;
    }

    if (num > 0) {
      countPositives = ++countPositives;
    }

    if (num < 0) {
      countNegatives = ++countNegatives;
    }
  });

  function calculateRatio(value) {
    return (value / arr.length).toFixed(6);
  }

  console.log(calculateRatio(countPositives));
  console.log(calculateRatio(countNegatives));
  console.log(calculateRatio(countZeros));
}

const ratiosArr = [-4, 3, -9, 0, 4, 1];

plusMinus(ratiosArr);
