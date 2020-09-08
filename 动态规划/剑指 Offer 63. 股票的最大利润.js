/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let length = prices.length
  if (length === 0) return 0
  let res = 0
  let sum = 0
  for (let i = 1; i < length; i++) {
    sum += prices[i] - prices[i - 1]
    if (sum < 0) {
      sum = 0
    }
    res = Math.max(res, sum)
  }
  return res
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))