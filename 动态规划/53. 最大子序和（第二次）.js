/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = 0
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (sum > 0) {
      sum += nums[i]
    } else {
      sum = nums[i]
    }
    res = Math.max(sum, res)
  }
  return res
}
console.log(
  maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))