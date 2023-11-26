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
