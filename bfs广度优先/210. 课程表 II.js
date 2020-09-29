/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0)
  const map = {}
  for (let i = 0; i < prerequisites.length; i++) {
    const current = prerequisites[i]
    inDegree[current[0]]++;
    if (map[current[1]]) {
      map[current[1]].push(current[0])
    } else {
      map[current[1]] = [current[0]]
    }
  }
  let queue = []
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i)
    }
  }
  let result = [],
    count = 0
  while (queue.length) {
    const selected = queue.shift()
    result.push(selected)
    count++
    const enQueue = map[selected]
    if (enQueue && enQueue.length) {
      for (let i = 0; i < enQueue.length; i++) {
        inDegree[enQueue[i]]--
          if (inDegree[enQueue[i]] === 0) {
            queue.push(enQueue[i])
          }
      }
    }
  }
  return count === numCourses ? result : []
};

console.log(findOrder(4, [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2]
]))