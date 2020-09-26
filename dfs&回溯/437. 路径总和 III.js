/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  if (!root) return 0
  let num = render(root, sum)
  let left = pathSum(root.left, sum)
  let right = pathSum(root.right, sum)
  return num + left + right

  function render(node, sum) {
    if (!node) return 0
    let current = sum === node.val ? 1 : 0
    let left = render(node.left, sum - node.val)
    let right = render(node.right, sum - node.val)
    return current + left + right
  }
};