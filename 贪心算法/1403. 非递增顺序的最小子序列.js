/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
  nums.sort((a, b) => b - a)
  const sum = nums.reduce((pre, cur) => pre + cur, 0) / 2
  const result = []
  let curSum = 0
  for (let i = 0; i < nums.length; i++) {
    if (curSum + nums[i] > sum) {
      result.push(nums[i])
      return result
    } else {
      result.push(nums[i])
    }
    curSum += nums[i]
  }
  return result
};