/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  if (nums.length === 0) return []
  let uniArr = [...new Set(nums)]
  let sum = 0,
    uniSum = 0,
    total = (1 + nums.length) * nums.length / 2
  for (let num of nums) {
    sum += num
  }
  for (let arrNum of uniArr) {
    uniSum += arrNum
  }
  return [sum - uniSum, total - uniSum]
};

console.log(findErrorNums(
  [1, 2, 2, 4]))