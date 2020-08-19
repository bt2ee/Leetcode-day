/**
 * @param {number[][]} points
 * @return {number}
 */
// 左区间排序
var findMinArrowShots = function(points) {
  let length = points.length
  if (length === 0) return 0
  points = points.sort((a, b) => a[0] - b[0] ? a[0] - b[0] : a[1] - b[1])
  let end = points[0][1],
    count = 1
  for (let i = 1; i < length; i++) {
    if (end >= points[i][0]) {
      end = Math.min(end, points[i][1])
    } else {
      end = points[i][1]
      count += 1
    }
  }
  return count
};

/**
 * @param {number[][]} points
 * @return {number}
 */
// 右区间排序
var findMinArrowShots = function(points) {
  points.sort((a, b) => a[1] - b[1])
  let sum = 0 //记录区间个数
  let value = -Infinity;
  for (let i = 0; i < points.length; i++) {
    if (points[i][0] > value) {
      sum++
      value = points[i][1]
    }
  }
  return sum
};

console.log(findMinArrowShots([
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
  [2, 7],
  [2, 3],
]))