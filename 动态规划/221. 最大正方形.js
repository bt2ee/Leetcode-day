/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let len1 = matrix.length;
  if (len1 === 0) return 0;
  let len2 = matrix[0].length;
  if (len2 === 0) return 0;
  let max = 0;
  let dp = [];

  for (let i = 0; i < len1; i++) {
    dp[i] = new Array(len2).fill(0);
  }

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (matrix[i][j] === "1") {
        if (i === 0 || j === 0) {
          matrix[i][j] =
            1
        } else {
          matrix[i][j] =
            1 +
            Math.min(matrix[i - 1][j], matrix[i - 1][j - 1], matrix[i][j - 1]);
        }
        max = Math.max(matrix[i][j], max);
      }
    }
  }
  return max * max;
};

console.log(maximalSquare([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "1", "1", "0"],
  ["1", "1", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["0", "0", "1", "1", "1"]
]))