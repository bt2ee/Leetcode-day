/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let n = prices.length;
  let profit_in = 0 - prices[0];
  let profit_out = 0;
  //冻结时的利润
  let profit_freeze = 0;
  for (let i = 1; i < n; i++) {
    let temp = profit_out;
    profit_out = Math.max(profit_out, profit_in + prices[i]);
    //买入时的利润= 上次冻结时的利润 - 当天价格
    profit_in = Math.max(profit_in, profit_freeze - prices[i]);
    //冻结时的利润 = 上次卖出时的利润
    profit_freeze = temp;
  }
  return profit_out;
};