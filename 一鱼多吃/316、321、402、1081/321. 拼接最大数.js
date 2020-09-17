/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {

  const nums1Map = findMaxK(nums1, k)
  const nums2Map = findMaxK(nums2, k)

  var maxNum = 0,
    result = []
  for (let i = 0; i <= k; i++) {
    if (i <= nums1.length && k - i <= nums2.length) {
      let merge = mergeMax(nums1Map[i], nums2Map[k - i])
      if (merge.length > 0) {
        let num = merge.join('')
        if (num > maxNum) {
          maxNum = num
          result = merge
        }
      }
    }
  }
  return result

  function mergeMax(a, b) {
    if (!a || !b) return a || b
    const stack = []
    while (a.length > 0 || b.length > 0) {
      if (a.length === 0) {
        stack.push(b.shift())
      } else if (b.length === 0) {
        stack.push(a.shift())
      } else {
        if (a.join('') > b.join('')) {
          stack.push(a.shift())
        } else {
          stack.push(b.shift())
        }
      }
    }
    return stack
  }

  function findMaxK(nums, k) {
    let length = nums.length
    let map = {}
    if (length === 0) return {}
    for (let i = 1; i <= k; i++) {
      let stack = [nums[0]]
      for (let j = 1; j < length; j++) {
        while (stack.length > 0 && nums[j] > stack[stack.length - 1] && length - j > i - stack.length) {
          stack.pop()
        }
        if (stack.length < i) stack.push(nums[j])
      }
      map[i] = stack
    }
    return map
  }
};

console.log(maxNumber([6, 7], [6, 0, 4],
  5))