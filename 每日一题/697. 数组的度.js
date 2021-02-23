/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let tempArr = [],
    max = 0,
    len = 0;
  for (let i = 0; i < nums.length; i++) {
    if (tempArr[nums[i]]) {
      tempArr[nums[i]].total += 1;
      tempArr[nums[i]].end = i;
    } else {
      tempArr[nums[i]] = {
        total: 1,
        start: i,
        end: i,
      };
    }
  }
  tempArr.forEach((item) => {
    if (item.total > max) {
      max = item.total;
      len = item.end - item.start + 1;
    } else if (item.total === max) {
      len = Math.min(item.end - item.start + 1, len);
    }
  });

  return len;
};

console.log(findShortestSubArray([1, 2, 2, 3, 1]));