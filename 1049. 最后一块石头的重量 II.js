/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
  const len = stones.length
  if (len === 0) return 0
  if (len === 1) return stones[0]
  let sum = 0
  for (let i = 0; i < len; i++) {
    sum += stones[i]
  }
  let dpLen = Math.floor(sum / 2 + 1)
  let dp = new Array(dpLen + 1).fill(0)

  for (let i = 0; i < len; i++) {
    for (let j = dpLen; j > stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
    }
  }
  return sum - dp[dpLen] * 2
};
console.log(lastStoneWeightII([2, 7, 4, 1, 8, 1]))