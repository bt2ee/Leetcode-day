/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  if (A.length < 2) return true
  const flag = A[A.length - 1] > A[0]
  for (let i = 1; i < A.length; i++) {
    if (A[i] === A[i - 1]) continue
    let temp = A[i] > A[i - 1]
    if (temp && !flag || !temp && flag) return false
  }
  return true
};