/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  if (!S) return []
  let map = {}
  for (let i = 0; i < S.length; i++) {
    map[S[i]] = i
  }
  const res = [];
  let start = 0; // 待切割的起始位置
  let scannedCharMaxPos = 0; // 已扫描的字符中最远的位置

  for (let i = 0; i < S.length; i++) {
    scannedCharMaxPos = Math.max(scannedCharMaxPos, map[S[i]])
    if (i === scannedCharMaxPos) {
      res.push(i - start + 1)
      start = i + 1
    }
  }
  return res
};