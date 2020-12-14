/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  const arr = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    arr[s.codePointAt(i) - 'a'.codePointAt()]++
  }
  for (let i = 0; i < t.length; i++) {
    --arr[t.codePointAt(i) - 'a'.codePointAt()]
    if (arr[t.codePointAt(i) - 'a'.codePointAt()] < 0) {
      return false
    }
  }
  return true
};