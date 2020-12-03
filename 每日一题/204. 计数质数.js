/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0
  let flag = new Array(n + 1).fill(false)
  for (let i = 2; i < n; i++) {
    if (!flag[i]) {
      count++
      flag[i] = true
      for (let j = i * i; j < n; j += i) {
        flag[j] = true
      }
    }
  }
  return count
};