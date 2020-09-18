/**
 * @param {number[][]} obstacleGrid
 * @return {number[][]}
 */
var pathWithObstacles = function(obstacleGrid) {
  let result = [],
    rowLen = obstacleGrid.length;
  if (!rowLen) return [];
  let colLen = obstacleGrid[0].length;
  dfs([], result, 0, 0);
  return result;

  function dfs(temp, result, i, j) {
    if (obstacleGrid[i][j] !== 1) {
      obstacleGrid[i][j] = 1
      temp.push([i, j]);
      if (i === rowLen - 1 && j === colLen - 1) {
        result.push(...temp);
        return;
      }
      if (i + 1 < rowLen && obstacleGrid[i + 1][j] !== 1) {
        dfs(temp, result, i + 1, j);
      }
      if (j + 1 < colLen && obstacleGrid[i][j + 1] !== 1) {
        dfs(temp, result, i, j + 1);
      }
      temp.pop();
    }
  }
};

console.log(
  pathWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);