/**
 * @param {number[]} array
 * @return {number[]}
 */
var subSort = function(array) {
  let left = -1,
    right = -1,
    max = -Infinity,
    min = Infinity
  for (let i = 1; i < array.length; i++) {
    if (array[i] < max) {
      right = i
    } else {
      max = Math.max(max, array[i])
    }
    if (array[array.length - 1 - i] > min) {
      left = array.length - 1 - i
    } else {
      min = Math.min(min, array[array.length - 1 - i])
    }
  }
  return [left, right]
}

console.log(subSort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]))