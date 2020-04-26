/**
给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。
注意:
num 的长度小于 10002 且 ≥ k。
num 不会包含任何前导零。

示例 1 :
输入: num = "1432219", k = 3
输出: "1219"
解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219。

示例 2 :
输入: num = "10200", k = 1
输出: "200"
解释: 移掉首位的 1 剩下的数字为 200. 注意输出不能有任何前导零。

示例 3 :
输入: num = "10", k = 2
输出: "0"
解释: 从原数字移除所有的数字，剩余为空就是0。
 */

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if (num.length <= k || !num.length) return "0"
  for (let i = 0; i < k; i++) {
    let j = 0
    for (; j < num.length; j++) {
      if (num[j] > num[j + 1]) {
        num = `${num.substr(0, j)}${num.substr(j + 1)}`
        while (num[0] === "0" && num.length > 1) {
          num = num.substr(1)
        }
        break
      }
    }
    if (j === num.length) {
      num = num.substr(0, num.length - 1)
    }
  }
  return num
};