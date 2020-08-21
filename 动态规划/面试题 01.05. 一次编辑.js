/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
  if (Math.abs(first.length - second.length) > 1) {
    return false;
  }
  if (first.length === second.length) {
    let c = 0;
    for (let i = 0, len = first.length; i < len; i++) {
      if (first.charAt(i) !== second.charAt(i)) {
        c++;
        if (c > 1) return false;
      }
    }
    return true;
  } else {
    let str1, str2;
    if (first.length > second.length) {
      str1 = second;
      str2 = first;
    } else {
      str2 = second;
      str1 = first;
    }
    first = second = undefined;
    let c = 0;
    for (let i = 0, j = 0, len = str1.length; i < len;) {
      if (str1.charAt(i) !== str2.charAt(j)) {
        c++;
        if (c > 1) return false;
      } else {
        i++;
      }
      j++;
    }
    return true;
  }
};