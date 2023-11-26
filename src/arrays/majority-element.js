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
