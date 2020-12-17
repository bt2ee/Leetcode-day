/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  if (nums.length < 2) return false
  const array = new Array(nums.length + 1).fill(0)
  array[0] = 0
  array[1] = nums[0]
  for (let i = 2; i <= nums.length; i++) {
    array[i] = nums[i - 1] + array[i - 1];
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      const currentDiff = array[i] - array[j];
      if (i - j >= 2) {
        if (k === 0) {
          if (currentDiff === 0) return true
        } else {
          if (currentDiff % k === 0) return true
        }
      }
    }
  }
  return false
};