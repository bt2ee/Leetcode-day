/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = []
  let flag = new Array(nums.length).fill(false)
  const backtrack = (nums, result, dep, temp, flag) => {
    if (temp.length === nums.length) {
      result.push([...temp])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (!flag[i]) {
        flag[i] = true
        temp.push(nums[i])
        backtrack(nums, result, dep + 1, temp, flag)
        temp.pop()
        flag[i] = false
      }
    }
  }
  backtrack(nums, result, 0, [], flag)
  return result
};


// result = []
// def backtrack(路径, 选择列表):
//     if 满足结束条件:
//         result.add(路径)
//         return

//     for 选择 in 选择列表:
//         做选择
//         backtrack(路径, 选择列表)
//         撤销选择