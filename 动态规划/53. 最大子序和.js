/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
var maxSubArray = function(nums) {
  if (nums.length === 0) return 0
  let dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
  }
  return Math.max(...dp)
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心
var maxSubArray = function(nums) {
  if (nums.length === 0) return 0
  let sum = 0,
    res = sum[0]
  for (let i = 1; i < nums.length; i++) {
    if (sum > 0) sum += nums[i]
    else sum = nums[i]
    res = Math.max(res, sum)
  }
  return res
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))