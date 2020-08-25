/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// s1 = "ab" s2 = "eidbaooo"
var checkInclusion = function(s1, s2) {
  if (!s1) return true;
  if (!s2) return false;
  let need = new Map();
  let windows = new Map();
  for (let item of s1) {
    if (need[item] == null) {
      need[item] = 0;
    }
    need[item]++;
  }

  let valid = 0,
    left = 0,
    right = 0;
  while (right < s2.length) {
    // c 是移入窗口的字符
    let c = s2[right];
    right++;
    if (need[c]) {
      if (windows[c] == null) {
        windows[c] = 0;
      }
      windows[c]++;
      if (windows[c] === need[c]) valid++;
    }
    while (right - left >= s1.length) {
      if (valid === Object.keys(need).length) {
        return true;
      }
      let d = s2[left];
      left++;
      if (need[d]) {
        if (windows[d] === need[d]) {
          valid--;
        }
        windows[d]--;
      }
    }
  }
  return false;
};

console.log(checkInclusion("abcdxabcde", "abcdeabcdx"));