/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
  if (intervals.length === 0) return 0
  intervals.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
  let left = intervals[0][0],
    right = intervals[0][1],
    sum = 0

  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i]
    if (left <= current[0] && right >= current[1]) {
      sum++
    }
    if (left <= current[0] && right <= current[1]) {
      right = current[1]
    }
    if (right < current[0]) {
      left = current[0]
      right = current[1]
    }
  }
  return intervals.length - sum
};

console.log(removeCoveredIntervals([
  [1, 4],
  [3, 6],
  [2, 8]
]))