/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (!numRows || numRows === 0) return []
  let res = [
    [1]
  ]
  for (let i = 1; i < numRows; i++) {
    res[i] = []
    for (let j = 0; j <= i; j++) {
      if (j > 0 && j < i) {
        res[i][j] = Number(res[i - 1][j - 1] + res[i - 1][j])
      } else {
        res[i][j] = 1
      }
    }
  }
  return res
};

console.log(generate(5))