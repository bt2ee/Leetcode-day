/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let count = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      count++
      nums[count] = nums[i]
    }
  }
  return count + 1
};

console.log(removeDuplicates([1, 1, 2]))