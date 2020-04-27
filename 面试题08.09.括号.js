/**
括号。设计一种算法，打印n对括号的所有合法的（例如，开闭一一对应）组合。
说明：解集不能包含重复的子集。
例如，给出 n = 3，生成结果为：
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (!n) return []
  let result = []
  backtrack(result, n, 0, '')
  return result
};

var backtrack = function(result, left, right, track) {
  if (!left && !right) {
    return result.push(track)
  } else {
    if (left > 0) backtrack(result, left - 1, right + 1, track + '(')
    if (right > 0) backtrack(result, left, right - 1, track + ')')
  }
}