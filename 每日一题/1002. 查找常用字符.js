/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  return A.reduce((prev, next) => getCommon(prev, next));
};

function getCommon(prev, next) {
  let map = {}
  for (let i = 0; i < prev.length; i++) {
    if (!map[prev[i]]) {
      map[prev[i]] = 1
    } else {
      map[prev[i]] += 1
    }
  }
  const result = []
  for (let i = 0; i < next.length; i++) {
    if (map[next[i]]) {
      result.push(next[i])
      map[next[i]] -= 1
    }
  }
  return result
}