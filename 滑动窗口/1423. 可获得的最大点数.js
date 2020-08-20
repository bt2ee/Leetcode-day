/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  const length = cardPoints.length;
  if (length === 0) return 0;
  const sum = cardPoints.reduce((a, b) => a + b, 0);
  const arrlength = length - k; // 滑动窗口的大小
  let totalSum = 0,
    tempSum = 0,
    left = 0,
    right = 0;
  while (right < length) {
    tempSum += cardPoints[right];
    right++;
    if (right - left > arrlength) {
      tempSum == cardPoints[left++];
    }
    if (right - left === arrlength) {
      totalSum = Math.max(totalSum, sum - tempSum);
    }
  }
  return totalSum;
};

console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7));