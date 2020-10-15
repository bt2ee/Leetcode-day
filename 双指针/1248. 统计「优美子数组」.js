/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  if (nums.length === 0 || k > nums.length) return 0;
  let start = 0,
    end = 0,
    result = 0;
  let count = 0;
  while (end <= nums.length) {
    if (count < k) {
      if (nums[end] % 2 == 1) {
        count++;
      }
      end++
    }
    if (count === k) {
      let temp = end
      while (end < nums.length && nums[end] % 2 === 0) {
        end++
      }
      let rightCnt = end - temp
      let leftCnt = 0
      while (nums[start] % 2 === 0) {
        leftCnt++
        start++
      }
      result += (leftCnt + 1) * (rightCnt + 1)
      start++
      count--
    }
  }
  return result;
};

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));