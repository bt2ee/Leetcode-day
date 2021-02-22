/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
  let len = 0,
    max = nums[0],
    min = nums[0],
    left = 0,
    right = 0;
  while (right < nums.length) {
    min = Math.min(min, nums[right]);
    max = Math.max(max, nums[right]);
    if (max - min > limit) {
      // left 被迫右移
      left++;
      // 重新计算最大最小值
      min = max = nums[left];
      for (let i = left; i <= right; i++) {
        min = Math.min(min, nums[i]);
        max = Math.max(max, nums[i]);
      }
    }
    len = Math.max(len, right - left + 1);
    right++;
  }
  return len;
};