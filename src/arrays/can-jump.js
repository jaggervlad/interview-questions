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
