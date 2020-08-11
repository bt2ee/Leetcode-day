/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
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

console.log(findTargetSumWays([1, 1, 2, 3], 3))