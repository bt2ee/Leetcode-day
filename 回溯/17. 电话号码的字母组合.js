/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const keyMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }
  if (!digits) return []
  let result = []

  dfs(digits, result, '')

  function dfs(tempArr, result, temp) {
    if (temp.length === digits.length) {
      result.push(temp)
      return
    }
    let c = tempArr.slice(0, 1)
    tempArr = tempArr.slice(1)
    for (let k = 0; k < keyMap[c].length; k++) {
      temp += keyMap[c][k]
      dfs(tempArr, result, temp)
      temp = temp.slice(0, -1)
    }
  }

  return result
};

console.log(letterCombinations('23'))