/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
  let len = clips.length
  if (clips.length === 0) return -1
  clips.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])

  if (clips[0][0] > 0) return -1
  if (clips[len - 1][1] < T) return -1
  let left = 0,
    right = 0,
    res = 0
  for (let i = 0; i < len; i++) {
    if (clips[i][0] > left) {
      left = right;
      res++
    }
    if (clips[i][0] <= left) {
      right = Math.max(right, clips[i][1])
      if (right >= T) break
    }
  }
  if (right >= T) return res + 1
  return -1
};

console.log(videoStitching(
  [
    [0, 2],
    [4, 6],
    [8, 10],
    [1, 9],
    [1, 5],
    [5, 9]
  ],
  10))