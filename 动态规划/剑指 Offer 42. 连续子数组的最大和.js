/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = 0,
    max = nums[0]
  nums.forEach(item => {
    sum += item
    max = Math.max(sum, max)
    if (sum < 0) sum = 0
  })
  return max
};