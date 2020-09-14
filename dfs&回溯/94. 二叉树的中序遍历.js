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
var inorderTraversal = function(root) {
  if (!root) return []
  const result = []
  dfs(root)
  return result

  function dfs(root) {
    if (!root) return
    dfs(root.left)
    result.push(root.val)
    dfs(root.right)
  }
};
