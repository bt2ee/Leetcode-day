/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  for (let i = 0; i < A.length; i++) {
    A[i] = A[i].reverse();
    A[i] = A[i].map((item) => {
      return item === 0 ? 1 : 0;
    });
  }
  return A;
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);