/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  if (nums.length === 0) return false
  let sum = 0
  nums.forEach(item => sum += item)
  if (sum % 2 !== 0) return false
  let total = sum / 2
  let dp = new Array(total + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i < nums.length + 1; i++) {
    for (let j = total; j >= 1; --j) {
      if (j >= nums[i]) {
        dp[j] = Math.min(dp[j], dp[j - nums[i]] + 1)
      }
    }
  }
  return dp[total] === Infinity ? false : true
};