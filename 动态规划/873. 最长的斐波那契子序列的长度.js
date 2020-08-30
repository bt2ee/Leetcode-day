/**
 * @param {number[]} A
 * @return {number}
 */
// [1,2,3,4,5,6,7,8]
var lenLongestFibSubseq = function(A) {
  let length = A.length;
  if (length === 0) return 0;
  if (length === 1) return 1;
  let map = new Map();
  for (let i = 0; i < A.length; i++) {
    map.set(A[i], i);
  }
  let dp = Array.from({ length: A.length }, () => new Array(A.length).fill(2));
  let max = 0;
  for (let i = 0; i <= length; i++) {
    for (let j = 0; j < i; j++) {
      let f3 = A[i],
        f2 = A[j],
        f1 = f3 - f2;
      if (f2 > f1 && map.has(f1)) {
        dp[i][j] = Math.max(dp[i][j], dp[j][map.get(f1)] + 1);
        max = Math.max(dp[i][j], max);
      }
    }
  }
  return max
};

lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8]);