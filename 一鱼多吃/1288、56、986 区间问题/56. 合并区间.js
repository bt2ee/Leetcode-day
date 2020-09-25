/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length === 0) return []
  intervals.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
  let result = [],
    left = intervals[0][0],
    right = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i]
    if (current[0] <= right && current[1] > right) {
      right = current[1]
    }
    if (current[0] > right) {
      result.push([left, right])
      left = current[0]
      right = current[1]
    }
  }
  result.push([left, right])
  return result
};

console.log(merge([
  [1, 4],
  [1, 5]
]))