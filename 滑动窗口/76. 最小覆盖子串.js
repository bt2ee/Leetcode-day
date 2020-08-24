/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let need = new Map();
  let windows = new Map();
  for (item of t) {
    if (need[item] == null) {
      need[item] = 0;
    }
    need[item]++;
  }
  let left = 0,
    right = 0,
    valid = 0,
    len = Infinity,
    start;
  while (right < s.length) {
    let c = s[right];
    right++;
    if (need[c]) {
      if (windows[c] === null) {
        windows[c] = 0;
      }
      windows[c]++;
      if (windows[c] === need[c]) {
        valid++;
      }
    }
    while (valid === Object.keys(need).length) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      let d = s[left];
      left++;
      if (need[d]) {
        if (windows[d] === need[d]) {
          valid--;
        }
        windows[d]--;
      }
    }
  }
  return len === Infinity ? "" : s.slice(start, start + len);
};