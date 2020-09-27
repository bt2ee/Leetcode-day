/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  let need = 0
  for (let i of s) {
    if (i === '(') {
      need += 2
      if (need % 2 == 1) {
        res++;
        need--;
      }
    } else {
      need--
      if (need === -1) {
        res++
        need = 1
      }
    }
  }
  return need + res
};