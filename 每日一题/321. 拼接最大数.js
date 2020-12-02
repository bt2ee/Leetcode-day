/**
 * 输入:
 * nums1 = [3, 4, 6, 5]
 * nums2 = [9, 1, 2, 5, 8, 3]
 * k = 5
 * 输出:
 * [9, 8, 6, 5, 3]
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
  const nums1Map = findMaxK(nums1, k);
  const nums2Map = findMaxK(nums2, k);
  let result = [],
    maxNum = 0;

  for (let i = 0; i <= k; i++) {
    if (i <= nums1.length && k - 1 <= nums2.length) {
      const merge = mergeNums(nums1Map[i], nums2Map[k - i]);
      if (merge.length > 0) {
        const num = merge.join("");
        if (num > maxNum) {
          maxNum = num;
          result = merge;
        }
      }
    }
  }
  return result;

  function mergeNums(nums1, nums2) {
    if (!nums1 || !nums2) return nums1 || nums2;
    let stack = [];
    while (nums1.length > 0 || nums2.length > 0) {
      if (nums1.length === 0) {
        stack.push(nums2.shift());
      } else if (nums2.length === 0) {
        stack.push(nums1.shift());
      } else {
        if (nums1.join("") > nums2.join("")) {
          stack.push(nums1.shift());
        } else {
          stack.push(nums2.shift());
        }
      }
    }
    return stack;
  }

  function findMaxK(nums, k) {
    let length = nums.length;
    let map = {};
    for (let i = 1; i <= k; i++) {
      let stack = [nums[0]];
      for (let j = 1; j < length; j++) {
        while (
          stack.length > 0 &&
          nums[j] > stack[stack.length - 1] &&
          length - j > i - stack.length
        ) {
          stack.pop();
        }
        if (stack.length < i) {
          stack.push(nums[j]);
        }
      }
      map[i] = stack;
    }
    return map;
  }
};

console.log(maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5));