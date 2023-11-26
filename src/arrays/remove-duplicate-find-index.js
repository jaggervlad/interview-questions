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
