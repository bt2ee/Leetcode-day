/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// 动态规划
var change = function(amount, coins) {
  let dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  for (let coin of coins) {
    for (let j = coin; j <= amount; j++) {
      dp[j] = dp[j] + dp[j - coin]
    }
  }
  return dp[amount]
};
console.log(change(5, [1, 2, 5]))