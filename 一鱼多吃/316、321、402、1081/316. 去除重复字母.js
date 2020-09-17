/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  let stack = []

  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    if (stack.indexOf(c) > -1) continue
    while (stack.length > 0 && c < stack[stack.length - 1] && s.indexOf(stack[stack.length - 1], i) > i) {
      stack.pop()
    }
    stack.push(c)
  }
  return stack.join('')
};

console.log(removeDuplicateLetters("cbacdcbc"))