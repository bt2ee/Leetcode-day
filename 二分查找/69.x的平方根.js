/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let start = 1,
    end = x
  let mid
  while (start <= end) {
    mid = (start + end) / 2 >> 0
    let n = mid ** 2
    if (n > x) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return --start
};

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  return Math.floor(Math.sqrt(x))
};
