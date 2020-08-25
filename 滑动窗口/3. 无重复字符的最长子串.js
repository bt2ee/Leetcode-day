/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let window = new Map();
  let left = (right = res = 0);
  for (let item of s) {
    if (window[item] == null) {
      window[item] = 0
    }
  }
  while (right < s.length) {
    let c = s[right];
    right++;
    window[c]++;
    while (window[c] > 1) {
      let d = s[left];
      left++;
      window[d]--;
    }
    res = Math.max(res, right - left);
  }
  return res;
};

console.log(lengthOfLongestSubstring("bbbbb"));