/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  if (!node) return 0
  let res = 0
  dfs(root, null)
  return res

  function dfs(node, prev) {
    if (!node) return 0
    const left = dfs(node.left, node.val)
    const right = dfs(node.right, node.val)
    res = Math.max(res, left + right)
    return node.val === prev ? Math.max(left, right) + 1 : 0
  }
};