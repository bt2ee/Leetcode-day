/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let len1 = word1.length
  let len2 = word2.length
  if (len1 === 0 || len2 === 0) return len1 + len2
    // let dp = new Array(len1 + 1).fill(new Array(len2 + 1).fill(0))
  let dp = Array.from({ length: len1 + 1 }, () => new Array(len2 + 1).fill(0))
  for (let i = 1; i <= len1; i++) {
    dp[i][0] = i
  }

  for (let i = 1; i <= len2; i++) {
    dp[0][i] = i
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (word1[i - 1] == word2[j - 1]) {
        dp[i][i] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1] + 1, dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[len1][len2]
};

console.log(minDistance("horse", "ros"))