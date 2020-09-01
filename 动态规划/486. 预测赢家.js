/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
  let length = nums.length
  if (length === 0 || length === 1 || length % 2 === 0) return true
  let dp = Array.from({ length: length }, () => new Array(length).fill(0))
  let sum = 0
  for (let i = 0; i < length; i++) {
    dp[i][i] = nums[i]
    sum += nums[i]
  }
  for (j = 1; j < length; j++) {
    dp[j - 1][j] = Math.max(nums[j - 1], nums[j])
  }

  for (let i = length - 2; i >= 0; i--) {
    for (let j = i + 2; j < length; j++) {
      dp[i][j] = Math.max(nums[i] + Math.min(dp[i + 2][j], dp[i + 1][j - 1]), nums[j] + Math.min(dp[i][j - 2], dp[i + 1][j - 1]))
    }
  }
  return dp[0][length - 1] >= sum - dp[0][length - 1]
};

console.log(PredictTheWinner([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))