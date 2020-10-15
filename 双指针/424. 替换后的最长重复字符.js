/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let maxTime = 0;
  for (let i = 0; i < s.length; i++) {
    // 设置窗口起始值
    const value = s[i];
    // 设置参数
    let replaceTime = k, // 可滑动次数
      slide = i, // 滑动的下标
      time = 1; // 本次出现数

    while (slide < s.length - 1 && (replaceTime || s[slide + 1] === value)) {
      slide++;
      time++;
      if (s[slide] !== value) {
        replaceTime--;
      }
    }

    // 此时右边到边界, 开始向左滑动
    slide = i;

    while (slide > 0 && (replaceTime || s[slide - 1] === value)) {
      slide--;
      time++;
      if (s[slide] !== value) {
        replaceTime--;
      }
    }

    maxTime = Math.max(maxTime, time);
  }
  return maxTime;
};

console.log(characterReplacement("AABABBA", 1));