/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  let profit_in = 0 - prices[0];
  let profit_out = 0;
  for (let i = 1; i < prices.length; i++) {
    profit_out = Math.max(profit_out, profit_in + prices[i] - fee);
    profit_in = Math.max(profit_in, profit_out - prices[i]);
  }
  return profit_out
};
console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));