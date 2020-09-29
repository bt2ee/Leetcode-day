/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// 2, [[1,0]]
var canFinish = function(numCourses, prerequisites) {
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
  const queue = []
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i) // 所有入度为0的课入列
  }
  let count = 0
  while (queue.length) {
    const selected = queue.shift()
    count++
    const toEnQueue = map[selected]
    if (toEnQueue && toEnQueue.length) {
      for (let i = 0; i < toEnQueue.length; i++) {
        inDegree[toEnQueue[i]]--
          if (inDegree[toEnQueue[i]] === 0) {
            queue.push(toEnQueue[i])
          }
      }
    }
  }
  return count === numCourses
};