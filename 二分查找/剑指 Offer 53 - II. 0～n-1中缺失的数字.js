/**
 * 暴力直接循环
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const target = nums.find((item, index) => index !== item)
  return target ? target - 1 : nums.length
};

/**
 * 二分查找
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let left = 0,
    right = nums.length - 1
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] !== mid) right = mid
    else left = mid + 1
  }
  return left === nums.length - 1 && nums[left] === left ? left + 1 : left
};

/**
 * 高斯求和
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const all = (0 + nums.length) * (nums.length + 1) / 2
  const real = nums.reduce((a, b) => a + b, 0)
  return all - real
};