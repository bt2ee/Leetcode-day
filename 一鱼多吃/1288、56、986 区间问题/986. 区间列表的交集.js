/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
  if (A.length === 0 || B.length === 0) return [];
  let i = 0,
    j = 0;
  res = [];
  while (i < A.length && j < B.length) {
    let [a1, a2] = A[i], [b1, b2] = B[j];
    if (b2 >= a1 && b1 <= a2) {
      res.push([Math.max(a1, b1), Math.min(a2, b2)]);
    }
    if (b2 > a2) {
      i++;
    } else {
      j++;
    }
  }
  return res;
};

console.log(
  intervalIntersection(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ], [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ]
  )
);