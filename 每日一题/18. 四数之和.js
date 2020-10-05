/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b)
  const set = new Set();
  let result = []
  backtrack([], 0, 0)
  return result

  function backtrack(path, sum, index) {
    for (let i = index; i < nums.length; i++) {
      const nextSum = sum + nums[i]
      if (nextSum > 0 && nextSum > target) {
        break
      }
      path.push(nums[i])
      if (path.length === 4) {
        if (target === nextSum) {
          const pathStr = path.join('-');
          if (!set.has(pathStr)) {
            result.push([...path])
            set.add(pathStr)
          }
        }
      } else {
        backtrack(path, nextSum, i + 1)
      }
      path.pop()
    }
  }
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))