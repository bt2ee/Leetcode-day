/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  let total = numBottles
  while (numBottles >= numExchange) {
    const currentEmptyBottles = Math.floor(numBottles / numExchange)
    numBottles = currentEmptyBottles + numBottles % numExchange
    total += currentEmptyBottles
  }
  return total
};