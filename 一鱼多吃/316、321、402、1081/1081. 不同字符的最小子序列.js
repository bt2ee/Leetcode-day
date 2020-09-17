/**
 * @param {string} text
 * @return {string}
 */
var smallestSubsequence = function(text) {
  let temp = []
  for (let i = 0; i < text.length; i++) {
    let c = text[i]
    if (temp.indexOf(c) > -1) continue
    while (temp.length && temp[temp.length - 1] > c && text.indexOf(temp[temp.length - 1], i) > i) {
      temp.pop()
    }
    temp.push(text[i])
  }
  return temp.join('')
};

console.log(smallestSubsequence('cdadabcc'))