/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
    return false;
  }
  let rows = matrix.length,
    columns = matrix[0].length;
  let row = 0,
    col = columns - 1;
  while (row < rows && col >= 0) {
    if (matrix[row][col] === target) {
      return true
    } else if (matrix[row][col] > target) {
      col--
    } else {
      row++
    }
  }
  return false
};

console.log(findNumberIn2DArray([
  [-5]
], -5))