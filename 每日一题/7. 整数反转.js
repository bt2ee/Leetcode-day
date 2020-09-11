/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let k = (Math.abs(x) + '').split('').reverse().join('')
  if (k < -(2 ** 31) || k > 2 ** 31 - 1) {
    return 0;
  }
  return x < 0 ? -k : k
};

console.log(reverse(-24))
