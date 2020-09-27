// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//   if (s === '') return true
//   let left = []
//   for (let i of s) {
//     if (i === '(' || i === '[' || i === '{') {
//       left.push(i)
//     } else {
//       if (left.length !== 0 && left[left.length - 1] === leftOf(i)) {
//         left.pop()
//       } else {
//         return false
//       }
//     }
//   }
//   return left.length === 0

//   function leftOf(c) {
//     if (c === '}') return '{'
//     else if (c === ']') return '['
//     else return '('
//   }
// };

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var rightSymbols = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      rightSymbols.push(")");
    } else if (s[i] == "{") {
      rightSymbols.push("}");
    } else if (s[i] == "[") {
      rightSymbols.push("]");
    } else if (rightSymbols.pop() != s[i]) {
      return false;
    }
  }
  return !rightSymbols.length;
};

console.log(isValid('()'))