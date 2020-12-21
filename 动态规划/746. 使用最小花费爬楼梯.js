/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let one = cost[0],
    two = cost[1],
    res = 0
  for (let i = 2; i <= cost.length; i++) {
    res = Math.min(one, two) + (cost[i] || 0)
    one = two
    two = res
  }
  return res
};