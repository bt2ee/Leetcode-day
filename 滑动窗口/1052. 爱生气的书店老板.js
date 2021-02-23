/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
  let total = 0,
    max = 0;
  // 先请求出最大满意度
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      total += customers[i];
      customers[i] = 0
    }
  }
  for (let i = 0; i < customers.length; i++) {
    total += customers[i];
    if (i >= X) {
      total -= customers[i - X]
    }
    max = Math.max(total, max)
  }
  return max
};

console.log(
  maxSatisfied([9, 10, 4, 5], [1, 0, 1, 1],
    1)
);