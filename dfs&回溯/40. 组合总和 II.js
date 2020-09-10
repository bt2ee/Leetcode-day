/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let length = candidates.length
  if (length === 0 || target === 0) return []
  candidates = candidates.sort((a, b) => a - b)
  const flag = new Array(length).fill(false)
  let result = []
  backtrack([], target, 0)
  return result

  function backtrack(temp, target, index) {
    if (target < 0) return
    if (target === 0) {
      result.push([...temp])
    }
    for (let i = index; i < length; i++) {
      if (candidates[i] === candidates[i - 1] && i > index) {
        continue
      }
      if (candidates[i] <= target && !flag[i]) {
        flag[i] = true
        temp.push(candidates[i])
        backtrack(temp, target - candidates[i], i + 1)
        temp.pop()
        flag[i] = false
      }
    }
  }
};

console.log(combinationSum2([2, 5, 2, 1, 2], 5))