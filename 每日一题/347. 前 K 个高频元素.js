/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let counts = new Map()
  nums.forEach(item => {
    let count = counts.get(item) || 0
    counts.set(item, count + 1)
  })

  return [...counts].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, k)
};

console.log(topKFrequent([3, 0, 1, 0], 1))