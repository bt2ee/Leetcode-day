/**
 * @param {number[][]} intervals
 * @return {number}
 */
// 左区间升序，记录 end 为当前右区间值，然后判断 i 的右区间和 i+1 的右区间
// i <= i+1 更改 end 为 i+1 右区间
// i > i+1 重叠，留下右区间更小的值，留下更大的空间
var eraseOverlapIntervals = function(intervals) {
  if (intervals.length === 0) return 0
  intervals.sort((a, b) => a[0] - b[0])
  let end = intervals[0][1]
  let count = 0
  for (let i = 1; i < intervals.length; i++) {
    if (end <= intervals[i][0]) {
      end = intervals[i][1]
    } else {
      end = Math.min(end, intervals[i][1])
      count += 1
    }
  }
  return count
};

console.log(eraseOverlapIntervals([
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3]
]))