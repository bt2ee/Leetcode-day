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

  let valid = 0;
  let left = 0;
  let right = 0;
  let len = Infinity;
  let start;
  while (right < s.length) {
    // c 是将移入窗口的字符
    let c = s[right];

    // 右移窗口
    right++;
    // 进行窗口内数据的一系列更新
    if (need[c]) {
      if (windows[c] == null) {
        windows[c] = 0;
      }
      windows[c]++;
      if (windows[c] === need[c]) valid++;
    }
    // 判断左侧窗口是否要收缩
    while (valid == Object.keys(need).length) {
      // 在这里更新最小覆盖子串
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      // d 是将移出窗口的字符
      let d = s[left];
      left++;
      if (need[d]) {
        if (windows[d] == need[d]) {
          valid--;
        }
        windows[d]--;
      }
    }
  }

  return len == Infinity ? "" : s.slice(start, start + len);
};