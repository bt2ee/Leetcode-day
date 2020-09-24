/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  let result = []
  convert(root)
  result.sort((a, b) => a - b)
  let modeNumber = 0
  let modeNum = 0,
    largetNum = 0
  result.forEach(item => {
    if (item === modeNumber) {
      modeNum += 1
    } else {
      modeNum = 1
      modeNumber = item
    }
    if (modeNum > largetNum) {
      largetNum = modeNum
      result = [item]
    } else if (modeNum === largetNum) {
      result.push(item)
    }
  })
  return result

  function convert(root) {
    if (root === null) return
    result.push(root.val)
    if (root.left) {
      convert(root.left)

    }
    if (root.right) {
      convert(root.right)
    }
  }
};