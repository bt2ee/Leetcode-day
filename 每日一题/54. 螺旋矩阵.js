/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const m = matrix.length,
    n = matrix[0].length,
    size = m * n
  let result = [],
    t = 0,
    r = n - 1,
    b = m - 1,
    l = 0
  while (result.length !== size) {
    for (let i = l; i <= r; i++) result.push(matrix[t][i])
    t++
    for (let i = t; i <= b; i++) result.push(matrix[i][r])
    r--
    // 检查下是否越界
    if (result.length === size) break
    for (let i = r; i >= l; i--) result.push(matrix[b][i])
    b--
    for (let i = b; i >= t; i--) result.push(matrix[i][l])
    l++
  }
  return result
};