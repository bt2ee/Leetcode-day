/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
  let len1 = first.length
  let len2 = second.length
  if (Math.abs(len1 - len2) >= 2) return false
  if (len1 === 0 || len1 === 1) return true
  let flag1 = 0,
    flag2 = 0,
    result = false
  while (flag1 < len1 && flag2 < len2) {
    if (first[flag1] === second[flag2]) {
      flag1++
      flag2++
    } else {
      console.log(first[flag1], second[flag2], flag1, flag2)
      if (result) return false
      flag1 = len1 >= len2 ? ++flag1 : flag1
      flag2 = len2 >= len1 ? ++flag2 : flag2
      result = true
    }
  }
  return true
};

console.log(oneEditAway("teacher",
  "teacherly"))