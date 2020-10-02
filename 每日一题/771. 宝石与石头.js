/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const arr = new Set(J)
  const arrS = S.split('')
  return arrS.filter(item => arr.has(item)).length
};