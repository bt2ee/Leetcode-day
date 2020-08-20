/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  if (n === 0 || n === 1 || n === 2) return 1
  let dp = new Array(n + 1).fill(0)
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = i - 1; j > 0; j--) {
      dp[i] = Math.max(dp[i], j * Math.max(dp[i - j], i - j))
    }
  }
  return dp[n]
};

console.log(integerBreak(10))