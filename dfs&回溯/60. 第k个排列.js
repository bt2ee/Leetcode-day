/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// 老老实实回溯一顿操作猛如虎，一看接口击败5%
var getPermutation = function(n, k) {
  let result = []
  let dp = new Array(n + 1).fill(false)
  dp[0] = true
  dfs(result, '', n, k, dp)
  console.log(result, 'result')
  return result[k - 1]
};

function dfs(result, temp, n, k, dp) {
  if (temp.length > n.length) {
    return
  }
  if (temp.length === n) {
    if (result.length === k) {
      return result
    }
    result.push(temp)
    return result
  }
  for (let i = 1; i <= n; i++) {
    if (!dp[i]) {
      dp[i] = true
      temp += i
      dfs(result, temp, n, k, dp)
      temp = temp.substr(0, temp.length - 1)
      dp[i] = false
    }
  }
}

console.log(getPermutation(3, 3))