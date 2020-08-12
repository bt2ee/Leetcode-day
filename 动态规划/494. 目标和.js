/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// 动态规划
var findTargetSumWays = function(nums, S) {
  if (nums.length === 0) return
  let sum = 0
  nums.forEach(item => sum += item)
  if ((sum + S) % 2 !== 0) return 0
  let total = (sum + S) / 2
  let dp = new Array(total + 1).fill(0)
  dp[0] = 1
  for (let num of nums) {
    for (let j = total; j >= num; --j) {
      dp[j] += dp[j - num]
    }
  }
  return dp[total]
};

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// 回溯
var findTargetSumWays = function(nums, S) {
  if (nums.length === 0) return 0
  let result = 0
  backtrack(nums, 0, S)

  function backtrack(nums, i, rest) {
    if (i === nums.length) {
      if (rest === 0) {
        result++
      }
      return
    }
    rest += nums[i]
    backtrack(nums, i + 1, rest)
    rest -= nums[i]

    rest -= nums[i]
    backtrack(nums, i + 1, rest)
    rest += nums[i]
  }
  return result
};

console.log(findTargetSumWays([1, 1, 2, 3], 3))