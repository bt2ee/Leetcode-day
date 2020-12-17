/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
  let preSumModK = 0;
  let count = 0;
  const map = new Array(K).fill(0)
  map[0] = 1
  for (let i = 0; i < A.length; i++) {
    preSumModK = (preSumModK + A[i]) % K
    if (preSumModK < 0) {
      preSumModK += K
    }
    count += map[preSumModK]
    map[preSumModK]++
  }
  return count
};