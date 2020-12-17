/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let presumK = 0,
    count = 0
  const map = new Map()
  map.set(0, 1)

  for (let i = 0; i < nums.length; i++) {
    presumK += nums[i]
    if (map.has(presumK - k)) count += map.get(presumK - k)
    map.set(presumK, (map.get(presumK) || 0) + 1)
  }
  return count
};