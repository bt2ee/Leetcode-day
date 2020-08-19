/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  let daysLength = days.length
  if (daysLength === 0) return 0
  let dp = new Array(days[daysLength - 1] + 1).fill(Infinity)
  dp[0] = 0
  daysIndex = 0
  for (let i = 1; i < days[daysLength - 1] + 1; i++) {
    if (daysIndex > daysLength) break;
    if (days[daysIndex] !== i) {
      dp[i] = dp[i - 1]
      continue
    }
    daysIndex++
    dp[i] = Math.min(
      dp[i - 1] + costs[0],
      i > 7 ? dp[i - 7] + costs[1] : costs[1],
      i > 30 ? dp[i - 30] + costs[2] : costs[2]
    )
  }
  return dp[days[daysLength - 1]]
};
console.log(mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]))