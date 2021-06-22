/**
 * 输入：s = "abc"
 * 输出：["abc","acb","bac","bca","cab","cba"]
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  if (s.length === 0) return []
  if (s.length === 1) return [s]
  const res = new Set()
  let flag = {}

  backtrack('')

  return [...res]

  function backtrack(temp) {
    if (temp.length > s.length) {
      return
    }
    if (temp.length === s.length) {
      res.add(temp)
      return
    }
    for (let i = 0; i < s.length; i++) {
      if (flag[i]) continue
      flag[i] = true
      backtrack(temp + s[i])
      flag[i] = false
    }
  }
};

permutation('abc')