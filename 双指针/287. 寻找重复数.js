/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let result = {}
  for (let i = 0; i < nums.length; i++) {
    if (result[nums[i]]) {
      return nums[i]
    } else {
      result[nums[i]] = 1
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let slow = 0;
  let fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) {
      fast = 0
      while (true) {
        if (fast === slow) {
          return slow
        }
        fast = nums[fast]
        slow = nums[slow]
      }
    }
  }
};