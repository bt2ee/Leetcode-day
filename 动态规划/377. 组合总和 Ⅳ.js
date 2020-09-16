/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 动规
var combinationSum4 = function(nums, target) {
  let dp = new Array(target + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i >= num) {
        dp[i] += dp[i - num]
      }
    }
  }
  return dp[target]
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// dfs 超时
var combinationSum4 = function(nums, target) {
  let dp = new Array(target + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i >= num) {
        dp[i] += dp[i - num]
      }
    }
  }
  return dp[target]
};

console.log(combinationSum4([1, 2, 3],
  4))