/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  if (n === 1) return n;
  let start = 1,
    end = n
  while (end > start) {
    let mid = Math.floor((end + start) / 2);
    preNum = ((1 + mid) * mid) / 2;
    if (n < preNum) end = mid
    else start = mid + 1
  }
  return --start
};

console.log(arrangeCoins(5))