/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
  let length = nums.length
  if (!length) return 0
  let dp = new Array(nums.length + 1).fill(0)
  let res = 0
  for (let i = 0; i < length; i++) {
    dp[i + 1] = Math.max(dp[i], dp[i - 1] ? dp[i - 1] + nums[i] : nums[i])
    res = Math.max(res, dp[i + 1])
  }
  return res
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
  let length = nums.length
  if (!length) return 0
  nums[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < length; i++) {
    nums[i] = Math.max(nums[i - 2] + nums[i], nums[i - 1])
  }
  return nums[length - 1]
};

console.log(massage([1, 2, 3, 1]))