/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
// var longestSubarray = function(nums, limit) {
//   let len = 0,
//     max = nums[0],
//     min = nums[0],
//     left = 0,
//     right = 0;
//   while (right < nums.length) {
//     min = Math.min(min, nums[right]);
//     max = Math.max(max, nums[right]);
//     if (max - min > limit) {
//       // left 被迫右移
//       left++;
//       // 重新计算最大最小值
//       min = max = nums[left];
//       for (let i = left; i <= right; i++) {
//         min = Math.min(min, nums[i]);
//         max = Math.max(max, nums[i]);
//       }
//     }
//     len = Math.max(len, right - left + 1);
//     right++;
//   }
//   return len;
// };

var longestSubarray = function(nums, limit) {
  let len = 1,
    max = [nums[0]],
    min = [nums[0]],
    left = 0,
    right = 1;
  while (right < nums.length) {
    while (max.length > 0 && max[max.length - 1] < nums[right]) {
      max.pop()
    }
    while (min.length > 0 && min[min.length - 1] > nums[right]) {
      min.pop()
    }
    max.push(nums[right])
    min.push(nums[right])

    while (max[0] - min[0] > limit) {
      if (max[0] === nums[left]) {
        max.shift()
      }
      if (min[0] === nums[left]) {
        min.shift()
      }
      // left 被迫右移
      left++;
    }
    len = Math.max(len, right - left + 1);
    right++;
  }
  return len;
};