/**
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function(A) {
  let length = A.length
  if (length < 2) return length
  let sum = res = A[0] !== A[1] ? 2 : 1
  for (let i = 2; i < length; i++) {
    if ((A[i - 1] > A[i] && A[i - 1] > A[i - 2]) ||
      (A[i - 1] < A[i] && A[i - 1] < A[i - 2])) {
      sum += 1
    } else if (A[i - 1] !== A[i]) {
      sum = 2
    } else {
      sum = 1
    }
    res = Math.max(sum, res)
  }
  return res
};