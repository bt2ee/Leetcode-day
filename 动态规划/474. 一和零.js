/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  if (strs.length == 0) {
    return 0;
  }
  let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for (let str of strs) {
    let ones = zeros = 0
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '0') {
        zeros++
      } else {
        ones++
      }
    }
    for (let i = m; i >= zeros; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1)
      }
    }
  }
  return dp[m][n]
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"],
  5,
  3))