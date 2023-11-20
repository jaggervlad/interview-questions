function fibonacci(n, memo = {}) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (memo[n]) {
    return memo[n];
  } else {
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
  }
}

// Ejemplo de uso:
const numeroEnLaSecuencia = 40; // Cambia esto al número deseado
console.log(
  `El número Fibonacci en la posición ${numeroEnLaSecuencia} es ${fibonacci(
    numeroEnLaSecuencia
  )}`
);

function compareTriplets(a, b) {
  let result = [0, 0];

  for (let i = 0; i < a.length; i++) {
    const aValue = a[i];
    const bValue = b[i];

    if (aValue > bValue) {
      result[0] = ++result[0];
    }

    if (bValue > aValue) {
      result[1] = ++result[1];
    }
  }

  return result;
}

const a = [17, 28, 30];
const b = [99, 16, 8];
console.log('Compare triplets', compareTriplets(a, b));

function diagonalDifference(arr) {
  // Write your code here
  let leftToRightSum = 0;
  let rightToLeftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][i] !== undefined) {
      leftToRightSum += arr[i][i];
    }

    if (arr[i][arr.length - 1 - i] !== undefined) {
      rightToLeftSum += arr[i][arr.length - 1 - i];
    }
  }

  return Math.abs(leftToRightSum - rightToLeftSum);
}

const arrDia = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

console.log(diagonalDifference(arrDia));

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

function staircase(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(' ');
    }

    for (let k = 1; k <= i; k++) {
      process.stdout.write('#');
    }

    process.stdout.write('\n');
  }
}

staircase(6);

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

function designerPdfViewer(h, word) {
  // Write your code here
  let maxHeight = 0;

  for (let i = 0; i < word.length; i++) {
    // JS devuelve el valor code de a que comienza en 97
    let charI = word.charCodeAt(i) - 97;
    maxHeight = Math.max(maxHeight, h[charI]);
  }

  return maxHeight * word.length;
}

const heights = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 1, 1, 3, 1, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 4, 1,
];
const wordToHighlight = 'example';

const highlightedArea = designerPdfViewer(heights, wordToHighlight);
console.log('Área resaltada:', highlightedArea);

function utopianTree(n) {
  // Write your code here
  let height = 1;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      height *= 2;
    } else {
      height += 1;
    }
  }

  return height;
}

function angryProfessor(k, a) {
  // Write your code here

  const studentOnTime = a.filter((s) => s <= 0);

  if (studentOnTime.length >= k) {
    return 'NO';
  } else {
    return 'YES';
  }
}

const TEST_ANGRY_PROFESOR = [-2, -5, 4, 3, 2];

console.log(angryProfessor(3, TEST_ANGRY_PROFESOR));

function beautifulDays(i, j, k) {
  // Write your code here
  let countDayBeautifuls = 0;
  for (let x = i; x <= j; x++) {
    const currNumber = x;
    const reverseNumber = parseInt(x.toString().split('').reverse().join(''));

    const result = Math.abs(currNumber - reverseNumber) % k;

    countDayBeautifuls =
      result === 0 ? ++countDayBeautifuls : countDayBeautifuls;
  }

  return countDayBeautifuls;
}
beautifulDays(20, 23, 6);

function viralAdvertising(n) {
  // Write your code here
  let acumativeLikes = 0;
  let shared = 5;

  for (let day = 1; day <= n; day++) {
    const liked = Math.floor(shared / 2);
    acumativeLikes += liked;
    shared = liked * 3;
  }

  return acumativeLikes;
}

console.log(viralAdvertising(5));

function saveThePrisoner(n, m, s) {
  // Calculate the remaining sweets after distributing to full rounds of prisoners
  const remainingSweets = m % n;

  // Calculate the final chair number by starting from the initial chair number
  // and adjusting for the remaining sweets
  let finalChair = (s + remainingSweets - 1) % n;

  // If the result is 0, it means the last chair should be warned
  finalChair = finalChair === 0 ? n : finalChair;

  return finalChair;
}

// Example usage
const testCases = [[5, 2, 1]];

testCases.forEach(([n, m, s]) => {
  console.log(saveThePrisoner(n, m, s));
});

function joinArraysByKey({ leftArr, rightArr, key }) {
  let join = [];
  const resultMap = new Map();

  leftArr.forEach((i) => resultMap.set(i[key], i));

  rightArr.forEach((rigthItem) => {
    const leftItem = resultMap.get(rigthItem[key]);

    if (leftItem === undefined) return;

    join.push({ ...leftItem, ...rigthItem });
  });

  return join;
}

// Ejemplo de uso:
const array1 = [
  { id: 1, nombre: 'A', dato: 'Dato1' },
  { id: 2, nombre: 'B', dato: 'Dato2' },
];

const array2 = [
  { id: 1, otroDato: 'OtroDato1' },
  { id: 3, otroDato: 'OtroDato3' },
];

console.log(
  joinArraysByKey({
    leftArr: array1,
    rightArr: array2,
    key: 'id',
  })
);

function mergeSortedArrays(nums1, m, nums2, n) {
  let i = m - 1; // Index for nums1
  let j = n - 1; // Index for nums2
  let k = m + n - 1; // Index for the merged array (nums1)

  while (i >= 0 && j >= 0) {
    // Compare the elements from the end of both arrays
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // If there are remaining elements in nums2, copy them to nums1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}

// Example usage:
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

mergeSortedArrays(nums1, m, nums2, n);
console.log({ nums1 }); // Output: [1, 2, 2, 3, 5, 6]

function removeElement(nums, val) {
  nums.forEach((num, index) => {
    if (num === val) {
      nums[index] = '_';
    }
  });

  nums.sort((a, b) => {
    if (a === '_' && b === '_') {
      return 0;
    } else if (a === '_') {
      return 1;
    } else if (b === '_') {
      return -1;
    } else {
      return b - a;
    }
  });

  return nums.findIndex((e) => e === '_');
}

const testRemoveElement = [2, 3, 4, 4, 4, 3];
console.log(removeElement(testRemoveElement, 3));

function removeDuplicateInArray(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let k = 0;

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      k++;
      nums[k] = nums[i];
    }
  }

  nums.length = k;
  return k;
}

const testRemoveElementDupliate = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(
  'Remove duplicate',
  removeDuplicateInArray(testRemoveElementDupliate, 3)
);

function majorityElement(nums) {
  const mapNums = nums.reduce((acc, el) => {
    acc[el] = acc[el] ? (acc[el] += 1) : 1;

    return acc;
  }, {});

  const res = Object.entries(mapNums).reduce(
    (acc, el) => {
      return el[1] > acc[1] ? el : acc;
    },
    [null, 0]
  );

  return res[0];
}

const testMajorityElement = [3, 3, 1];
console.log(majorityElement(testMajorityElement));

// Calculate intervals
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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotateArraysByKey = function (nums, k) {
  const n = nums.length;
  k %= n;

  function reverse(nums, start, end) {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);

  return nums;
};
const rotateTest = [1, 2, 3, 4, 5, 6, 7];
console.log('Rotate arrys by key', rotateArraysByKey(rotateTest, 3));

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  if (!prices || prices.length < 2) return 0;

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);

    const potentialProfit = prices[i] - minPrice;

    maxProfit = Math.max(potentialProfit, maxProfit);
  }

  return maxProfit;
};

// Ejemplo de uso
const prices = [7, 1, 5, 3, 6, 4];
const result = maxProfit(prices);
console.log('Max Profit:', result);

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfitV2 = function (prices) {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // If the price on the current day is higher than the previous day, make a transaction
    if (prices[i] > prices[i - 1]) {
      // Add the profit to maxProfit
      maxProfit += prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return false;
    }

    maxReach = Math.max(maxReach, i + nums[i]);

    if (maxReach >= nums.length - 1) {
      return true;
    }
  }
};

console.log(canJump([2, 3, 1, 1, 4]));

console.log('-------------------------------');
function minJumps(nums) {
  const n = nums.length;
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < n - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
      // Si ya alcanzamos el final, no es necesario continuar
      if (currentEnd >= n - 1) {
        break;
      }
    }
  }

  return jumps;
}

// Ejemplo de uso
const nums = [2, 3, 1, 1, 4];
console.log('Min Jumps', minJumps(nums)); // Imprimirá el número mínimo de saltos necesarios
