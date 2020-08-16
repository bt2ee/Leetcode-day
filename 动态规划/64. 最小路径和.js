/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0
  let len1 = grid.length,
    len2 = grid[0].length

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (i === 0 && j !== 0) {
        grid[0][j] = grid[0][j - 1] + grid[0][j]
      } else if (i !== 0 && j === 0) {
        grid[i][0] = grid[i - 1][0] + grid[i][0]
      } else if (i !== 0 && j !== 0) {
        grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j]
      }
    }
  }
  return grid[len1 - 1][len2 - 1]
};

console.log(minPathSum(
  [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ]))