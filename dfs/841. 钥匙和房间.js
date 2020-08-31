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
        console.log(key, dp, rooms[key])
        dp[key] = true
        dfs(rooms[key], rooms)
      }
    }
  }
  return !dp.some(item => !item)
};

console.log(canVisitAllRooms(
  [
    [1],
    [1, 1]
  ]))