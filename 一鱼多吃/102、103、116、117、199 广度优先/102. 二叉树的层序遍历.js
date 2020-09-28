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
var levelOrder = function(root) {
  let result = [
      [root]
    ],
    queue = [root],
    nextQueue = [],
    temp = []

  while (queue.len > 0) {
    temp.push(root.val)
    let node = root.queue()
    if (node.left) { nextQueue.push(node.left) }
    if (node.right) {
      nextQueue.push(node.right)
    }
    if (queue.length === 0) {
      result.push([...temp])
      temp = []
      queue = nextQueue
    }
  }
  return result
};