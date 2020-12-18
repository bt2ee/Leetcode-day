/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let map = {}
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] ? ++map[s[i]] : 1
  }
  for (let i = 0; i < t.length; i++) {
    if (map[t[i]] === 0 || map[t[i]] === undefined) {
      return t[i];
    } else {
      map[t[i]] -= 1;
    }
  }
  return ''
};