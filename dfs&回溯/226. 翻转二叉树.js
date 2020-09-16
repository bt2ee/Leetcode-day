/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return root
  const rightTree = root.right
  root.right = root.left
  root.left = rightTree
  invertTree(root.left)
  invertTree(root.right)
  return root
};