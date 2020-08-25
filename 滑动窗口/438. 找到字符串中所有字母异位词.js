/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// s: "cbaebabacd" p: "abc"
var findAnagrams = function(s, p) {
  if (!s || !p) return [];
  let need = new Map();
  let window = new Map();
  for (let item of p) {
    if (need[item] == null) {
      need[item] = 0;
    }
    need[item]++;
  }
  let valid = 0,
    left = 0,
    right = 0,
    result = [];
  while (right < s.length) {
    let c = s[right];
    right++;
    if (need[c]) {
      if (window[c] == null) {
        window[c] = 0;
      }
      window[c]++;
      if (window[c] === need[c]) valid++;
    }
    while (right - left >= p.length) {
      if (Object.keys(need).length === valid) {
        result.push(left);
      }
      let d = s[left];
      left++;
      if (need[d]) {
        if (window[d] === need[d]) valid--;
        window[d]--;
      }
    }
  }
  return result;
};

console.log(findAnagrams("baa",
  "aa"));