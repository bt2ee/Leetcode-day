/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
  if (arr.length == 0 || start > arr.length) return flase
  let arrLength = arr.length
  const queue = [start]
  const visited = new Array(arrLength).fill(null);
  while (queue.length) {
    let length = queue.length

    for (let i = 0; i < length; i++) {
      let node = queue.shift()
      if (arr[node] === 0) return true
      if (visited[node]) continue
      visited[node] = true
      if (node + arr[node] < arrLength) {
        queue.push(node + arr[node])
      }
      if (node - arr[node] >= 0) {
        queue.push(node - arr[node])
      }
    }
  }
  return false
};

console.log(canReach([0, 3, 0, 6, 3, 3, 4], 6))