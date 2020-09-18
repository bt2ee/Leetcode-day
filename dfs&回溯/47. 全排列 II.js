/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 关键问题：如何选择元素才能使最后结果中没有重复的项？
// 排序后，i 和 i - 1 相等且 i - 1 没有被选择过
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b)
  let result = []
  let flag = new Array(nums.length).fill(false)
  backtrack([], flag)
  return result

  function backtrack(temp, flag) {
    if (temp.length > nums.length) {
      return
    }
    if (temp.length === nums.length) {
      return result.push([...temp])
    }
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i - 1] && !flag[i - 1]) {
        continue
      }
      if (!flag[i]) {
        flag[i] = true
        temp.push(nums[i])
        backtrack(temp, flag)
        temp.pop()
        flag[i] = false
      }
    }
  }
};

console.log(permuteUnique([3, 3, 0, 3]))