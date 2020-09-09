/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result = []
  dfs([], target)
  return result

  function dfs(temp, target) {
    if (target < 0) return
    if (target === 0) {
      result.push([...temp])
    }
    for (let i = 0; i < candidates.length; i++) {
      if (candidates[i] <= target) {
        if (temp[temp.length - 1] > candidates[i]) continue
        temp.push(candidates[i])
        dfs(temp, target - candidates[i])
        temp.pop()
      }
    }
  }
};

console.log(combinationSum([2, 3, 6, 7], 7))