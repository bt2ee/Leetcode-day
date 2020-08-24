/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  if (nums.length < 2) return nums.length
  let currentNums = []
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      currentNums.push(nums[i] - nums[i - 1])
    }
  }
  let res = 0,
    sum = 1
  for (let i = 1; i < currentNums.length; i++) {
    if (currentNums[i] * currentNums[i - 1] < 0) {
      sum += 1
    }
    res = Math.max(res, sum)
  }
  return res + 1
};

console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]))