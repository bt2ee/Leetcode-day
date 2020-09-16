/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const hasConflit = (row, col, val) => {
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === val || board[row][i] === val) {
        return true
      }
    }
    const rowStart = Math.floor(row / 3) * 3
    const colStart = Math.floor(col / 3) * 3
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[rowStart + i][colStart + j] === val) {
          return true
        }
      }
    }
    return false
  }

  const fill = (i, j) => {
    if (j === 9) {
      i++
      j = 0
      if (i === 9) return true
    }
    if (board[i][j] !== '.') return fill(i, j + 1)
    for (let num = 1; num <= 9; num++) {
      if (hasConflit(i, j, String(num))) continue
      board[i][j] = String(num)
      if (fill(i, j + 1)) return true
      board[i][j] = '.'
    }
  }
  fill(0, 0)
  return board
};