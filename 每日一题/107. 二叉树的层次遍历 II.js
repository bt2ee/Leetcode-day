/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let result = []
  dfs(root, 0)
  return result.reverse()

  function dfs(root, floor) {
    if (!root || root.val === null) return
    if (!result[floor]) {
      result[floor] = []
    }
    result[floor].push(root.val)
    dfs(root.left, floor += 1)
    dfs(root.right, floor + 1)
  }
};