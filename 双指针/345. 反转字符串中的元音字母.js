/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let temp = s.split("");
  let start = 0,
    end = temp.length - 1;
  while (start < end) {
    if (set.has(temp[start])) {
      if (set.has(temp[end])) {
        [temp[start], temp[end]] = [temp[end], temp[start]];
        start++
      }
      end--
    } else {
      start++
    }
  }
  return temp.join('');
};

console.log(reverseVowels("leetcode"));