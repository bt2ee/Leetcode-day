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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  if (!root) return new TreeNode(val)
  bfs(root)
  return root

  function bfs(root) {
    if (!root) return
    if (root.val < val) {
      if (!root.right) {
        root.right = new TreeNode(val)
        return
      }
      bfs(root.right)
    } else {
      if (!root.left) {
        root.left = new TreeNode(val)
        return
      }
      bfs(root.left)
    }
  }
};