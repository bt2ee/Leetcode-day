/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let results = []
  dfs(n, [], results)
  return results
};

var dfs = function(n, temp, result) {
  if (temp.length === n) {
    result.push(temp.map(i => {
      let strArr = Array(n).fill('.')
      strArr.splice(i, 1, 'Q')
      return strArr.join('')
    }))
  }
  // 每次有 n 个选择，该次放置在第几列
  for (let i = 0; i < n; i++) {
    if (isValid(temp, i)) {
      temp.push(i)
      dfs(n, temp, result)
      temp.pop()
    }
  }
}

var isValid = function(temp, j) {
  let i = temp.length // 当前行数
  for (let x = 0; x < i; x++) {
    let y = temp[x] // 列数
    if (y === j || x - y === i - j || x + y === i + j) {
      return false
    }
  }
  return true
}

console.log(solveNQueens(3))