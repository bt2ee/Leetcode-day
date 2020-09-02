/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  const len = stones.length
  if (len === 0) return 0
  if (len === 1) return stones[0]
  while (stones.length > 1) {
    let x = Math.max(...stones)
    stones.splice(stones.indexOf(x), 1)
    let y = Math.max(...stones)
    stones.splice(stones.indexOf(y), 1)
    stones.push(x - y)
  }
  return stones[0]
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]))