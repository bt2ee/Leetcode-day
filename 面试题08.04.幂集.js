/**
幂集。编写一种方法，返回某集合的所有子集。集合中不包含重复的元素。
说明：解集不能包含重复的子集。

示例:
 输入： nums = [1,2,3]
 输出：
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
  backtrack(nums, result, [], 0)
  return result
};

var backtrack = function(nums, result, temp, j) {
  if (j > nums.length || temp.length > nums.length) {
    return
  }
  for (let i = j; i < nums.length; i++) {
    temp.push(nums[i])
    result.push([...temp])
    backtrack(nums, result, temp, i + 1)
    temp.pop()
  }
}