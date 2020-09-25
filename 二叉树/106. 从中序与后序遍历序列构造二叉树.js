/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (!postorder.length) return null;
  let currentVal = postorder.pop(),
    current = new TreeNode(currentVal),
    index = inorder.indexOf(currentVal)

  current.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
  current.right = buildTree(inorder.slice(index + 1), postorder.slice(index))
  return current
};