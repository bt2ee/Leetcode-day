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
  if (root == null) return null
  let quene = [root]
  let nextQuene = [];
  while (quene.length > 0) {
    const node = quene.shift();
    if (quene.length > 0) {
      node.next = quene[0];
    }
    if (node.left) {
      nextQuene.push(node.left)
    }
    if (node.right) {
      nextQuene.push(node.right)
    }

    if (quene.length === 0) {
      quene = nextQuene
      nextQuene = []
    }
  }
  return root
};