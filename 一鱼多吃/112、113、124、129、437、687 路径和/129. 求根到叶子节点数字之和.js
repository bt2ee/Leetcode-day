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
var sumNumbers = function(root) {
  if (!root) return 0
  let result = 0
  dfs(root, 0)

  return result

  function dfs(node, temp) {
    if (!node) return
    temp = temp * 10 + node.val
    if (!node.left && !node.right) {
      result += temp
    }
    if (node.left) dfs(node.left, temp)
    if (node.right) dfs(node.right, temp)
  }
};