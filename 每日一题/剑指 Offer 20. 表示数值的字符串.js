/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  s = s.trim()
  let length = s.length
  if (!s || length === 0) return false
  let numFlag = dotFlag = eFlag = false
  for (let i = 0; i < length; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
      // 判定为数字
      numFlag = true
    } else if (s[i] === '.' && !dotFlag && !eFlag) {
      // 判定为小数点，且没有e
      dotFlag = true
    } else if (['e', 'E'].includes(s[i]) && !eFlag && numFlag) {
      // 判定为e 并且 eflag false 并且 numflag true
      eFlag = true
        // 将 numFlag 置 false, 因为 e 后面要有值
      numFlag = false
    } else if (['-', '+'].includes(s[i]) && (i === 0 || ['e', 'E'].includes(s[i - 1]))) {
      // 判定正负号
    } else {
      return false
    }
  }
  return numFlag
};

console.log(isNumber("2e0"))