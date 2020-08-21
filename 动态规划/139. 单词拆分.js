/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  if (s.length === 0) return true
  if (wordDict.length === 0) return false
  const wordSet = new Set(wordDict)
  let dp = new Array(s.length + 1).fill(false)
  dp[0] = true
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (dp[j] === false) continue
      const word = s.slice(j, i) // 截取字符串
      if (wordSet.has(word)) { // 判断是否存在
        dp[i] = true // 标记为true
        break // 并直接跳到下一个i + 1
      }
    }
  }
  return dp[s.length]
};

console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))