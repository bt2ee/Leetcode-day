/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if (num.length <= k || !num.length) return '0'
  let temp = [],
    resultLen = num.length - k
  for (let i = 0; i < num.length; i++) {
    while (temp.length > 0 && k > 0 && temp[temp.length - 1] > num[i]) {
      temp.pop()
      k -= 1
    }
    temp.push(num[i])
  }
  while (temp.length > 1 && temp[0] === '0') {
    temp.shift()
  }

  return temp.slice(0, resultLen).join('')
}

console.log(removeKdigits("1173",
  2))