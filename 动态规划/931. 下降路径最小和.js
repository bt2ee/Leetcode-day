/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
  let len1 = A.length
  if (len1 === 0) return 0
  let len2 = A[0].length
  let dp = Array.from({ length: len1 }, () => new Array(len2).fill(0))
  for (let i = 0; i < len2; i++) {
    dp[0][i] = A[0][i]
  }
  for (let i = 1; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      dp[i][j] = j - 1 >= 0 ?
        Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + A[i][j] : dp[i - 1][j] + A[i][j]
      if (j + 1 < len2) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j + 1] + A[i][j])
      }
    }
  }
  return Math.min(...dp[len1 - 1])
};

console.log(minFallingPathSum([
  [51, 24],
  [-50, 82]
]))