/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return null
  let queue = [root],
    nextQueue = []
  while (queue) {
    let node = queue.shift()
    if (queue.length > 0) {
      node.next = queue[0]
    }
    if (node.left) {
      nextQueue.push(node.left)
    }
    if (node.right) {
      nextQueue.push(node.right)
    }
    if (queue.length === 0) {
      queue = nextQueue
      nextQueue = []
    }
  }
  return root
};