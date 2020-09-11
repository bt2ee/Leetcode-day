/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let res = [0]
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      res.push(res[i / 2])
    } else {
      res.push(res[i - 1] + 1)
    }
  }
  return res
};

console.log(countBits(2))
