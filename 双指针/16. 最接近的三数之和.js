/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length === 0) return 0
  nums.sort((a, b) => a - b)
  let ans = nums[0] + nums[1] + nums[2]
  for (let i = 0; i < nums.length; i++) {
    let start = i + 1,
      end = nums.length - 1
    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end]
      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        ans = sum
      }
      if (sum > target) {
        end--
      } else if (sum < target) {
        start++
      } else {
        return ans
      }
    }
  }
  return ans
};

console.log(threeSumClosest([-1, 2, 1, -4], 1))