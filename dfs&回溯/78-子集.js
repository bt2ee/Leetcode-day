/**
给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
说明：解集不能包含重复的子集。

示例:

输入: nums = [1,2,3]
输出:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let result = [
    []
  ]
  backtrack(result, nums, [], 0)
  return result
};

var backtrack = function(result, nums, temp, index) {
  if (index > nums.length || temp.length > nums.length) {
    return
  }
  for (let i = index; i < nums.length; i++) {
    temp.push(nums[i])
    result.push([...temp])
    backtrack(result, nums, temp, i + 1)
    temp.pop()
  }
}