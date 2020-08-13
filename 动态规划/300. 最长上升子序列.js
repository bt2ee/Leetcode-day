/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (nums === null || nums.length === 0) return 0
  let dp = new Array(nums.length).fill(1)
  let max = 1
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1
      }
      if (dp[i] > max) {
        max = dp[i]
      }
    }
  }
  return max
};