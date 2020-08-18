/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
  let odd = 0,
    even = 0
  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 === 0) {
      even += 1
    } else {
      odd += 1
    }
  }
  return Math.min(odd, even)
};