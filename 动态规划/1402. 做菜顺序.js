/**
 * @param {number[]} satisfaction
 * @return {number}
 */
// 贪心
var maxSatisfaction = function(satisfaction) {
  if (satisfaction.length === 0) return 0
  satisfaction.sort((a, b) => a - b)
  let res = 0,
    sum = 0
  for (let j = satisfaction.length - 1; j >= 0; --j) {
    sum += satisfaction[j]
    if (sum <= 0) continue
    res += sum
  }
  return res
};

console.log(maxSatisfaction([-1, -8, 0, 5, -9]))