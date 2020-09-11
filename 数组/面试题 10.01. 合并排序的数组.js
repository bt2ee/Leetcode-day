/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
  A.splice(m, n, ...B)
  return A.sort((a, b) => a - b)
};

console.log(merge([1, 2, 3, 0, 0, 0],
  3, [2, 5, 6],
  3))
