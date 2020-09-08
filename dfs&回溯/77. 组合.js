/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result = []
  let dp = new Array(n + 1).fill(false)
  dfs(result, [], 1)

  return result

  function dfs(result, temp, index) {
    if (temp.length === k) {
      result.push([...temp])
      return
    }
    for (let i = index; i <= n; i++) {
      if (!dp[i]) {
        temp.push(i)
        dp[i] = true
        dfs(result, temp, i + 1)
        dp[i] = false
        temp.pop()
      }
    }
  }
};

console.log(combine(4, 2))