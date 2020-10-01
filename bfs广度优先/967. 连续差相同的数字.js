/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
  if (k >= 10 || n === 0) return []
  let queue = [],
    res = new Set()
  for (let i = 1; i <= 9; i++) {
    queue.push(i + '')
  }
  while (queue.length) {
    let length = queue.length
    for (let i = 0; i < length; i++) {
      let node = queue.shift()

      if (node.length === n) {
        res.add(node)
        break
      }
      const lastNum = Number(node.slice(-1))
      if (lastNum + k <= 9 && node.length + 1 <= n) {
        queue.push(node + (lastNum + k))
      }
      if (lastNum - k >= 0 && node.length + 1 <= n) {
        queue.push(node + (lastNum - k))
      }
    }
  }
  return Array.from(res)
};

console.log(numsSameConsecDiff(3, 7))