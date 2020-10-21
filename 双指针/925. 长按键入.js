/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  if (name.length > typed.length) return false
  let left = 0,
    right = 0
  while (left < name.length && right < typed.length) {
    if (name[left] === typed[right]) {
      left++
      right++
    } else if (right > 0 && typed[right] === name[left - 1]) {
      right++
    } else {
      return false
    }
  }
  while (right < typed.length) {
    if (name[left - 1] !== typed[right]) return false;
    right++;
  }

  return left === name.length
};