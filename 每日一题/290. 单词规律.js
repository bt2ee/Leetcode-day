/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const map = {},
    set = new Set()
  const arrayS = s.split(' ')
  if (pattern.length !== arrayS.length) return false
  for (let i = 0; i < pattern.length; i++) {
    if (!map[pattern[i]]) {
      map[pattern[i]] = arrayS[i]
      set.add(arrayS[i])
    }
    if (map[pattern[i]] !== arrayS[i]) return false
  }
  return set.size === map.size
};