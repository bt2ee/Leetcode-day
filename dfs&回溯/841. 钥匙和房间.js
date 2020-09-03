/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  let length = rooms.length
  if (length === 0 || length === 1) return true
  let dp = new Array(rooms.length).fill(false)
  dp[0] = true
  dfs(rooms[0], rooms)

  function dfs(keys, rooms) {
    for (let key of keys) {
      if (!dp[key]) {
        dp[key] = true
        dfs(rooms[key], rooms)
      }
    }
  }
  return !dp.some(item => !item)
};

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  let length = rooms.length
  if (length === 0 || length === 1) return true
  let dp = new Set()
  dfs(0)

  function dfs(cur) {
    dp.add(cur)
    let tmp = rooms[cur];
    for (let i = 0; i < tmp.length; i++) {
      if (!dp.has(tmp[i])) {
        dfs(tmp[i])
      }
    }
  }
  return dp.size === rooms.length
};

console.log(canVisitAllRooms(
  [
    [1],
    [1, 1]
  ]))