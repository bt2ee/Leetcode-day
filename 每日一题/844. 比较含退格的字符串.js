/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  function getStr(parmas) {
    let stack = []
    for (let i = 0; i < parmas.length; i++) {
      if (parmas[i] === '#') {
        stack.pop()
      } else {
        stack.push(parmas[i])
      }
    }
    return stack.join('')
  }
  return getStr(S) === getStr(T)
};