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
var rightSideView = function(root) {
  if (!root) return []
  let result = [],
    queue = [root]
  while (queue.length > 0) {
    let length = queue.length
    result.push([])
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      if (i === length - 1) {
        result[result.length - 1].push(node.val)
      }
      if (node.left) { queue.push(node.left) }
      if (node.right) { queue.push(node.right) }
    }
  }
};