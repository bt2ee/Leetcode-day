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
var maxPathSum = function(root) {
  let sum = -Infinity
  dfs(root)
  return sum

  function dfs(root) {
    if (!root) return 0
    const left = Math.max(0, dfs(root.left))
    const right = Math.max(0, dfs(root.right))
    sum = Math.max(sum, root.val + left + right)
    return root.val + Math.max(left, right)
  }
};