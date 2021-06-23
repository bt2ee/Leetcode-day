/**
 * 原题地址： https://binarysearch.com/problems/Shortest-Cycle-Containing-Target-Node
 */

class Solution {
  solve(graph, target) {
    const queue = [target];
    const visit = new Set();
    let level = 0
    while (queue.length > 0) {
      level += 1
      const length = queue.length
      for (let i = 0; i < length; i++) {
        const cur = queue.shift();
        if (visit.has(cur)) {
          continue;
        }
        for (let j in graph[cur]) {
          if (graph[cur][j] === target) {
            return level;
          }
          queue.push(graph[cur][j]);
        }
        visit.add(cur)
      }
    }
    return -1;
  }
}

const a = new Solution();

a.solve([
  [1, 2],
  [0],
  [2]
], 0);