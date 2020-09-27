/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  if (!S) return 0
  let left = 0,
    right = 0
  for (let i of S) {
    if (i === '(') {
      right++
    } else {
      right--
      if (right === -1) {
        right = 0
        left++
      }
    }
  }
  return right + left
};