/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return []
  let queue = [root],
    result = []
  while (queue.length > 0) {
    const length = queue.length
    result.push([])
    for (let i = 0; i < length; i++) {
      const resultLength = result.length
      let node = queue.shift()
      if (resultLength % 2 === 0) {
        result[resultLength - 1].unshift(node.val)
      } else {
        result[resultLength - 1].push(node.val)
      }
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }
  return result
};