/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0
  let deepNum = 0,
    queue = [root]
  while (queue.length > 0) {
    let length = queue.length
    deepNum += 1
    for (let i = 0; i < length; i++) {
      let node = queue.shift()
      if (node.children) {
        node.children.forEach(item => {
          queue.push(item)
        })
      }
    }
  }
  return deepNum
};