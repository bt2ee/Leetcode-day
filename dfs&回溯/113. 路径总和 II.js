/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (!root) return []
  let result = []
  render(root, sum, [])
  return result

  function render(root, sum, temp) {
    if (!root) return
    if (sum === root.val && !root.left && !root.right) {
      result.push([...temp, root.val])
    }
    temp.push(root.val)
    if (root.left) {
      render(root.left, sum - root.val, temp)
    }
    if (root.right) {
      render(root.right, sum - root.val, temp)
    }
    temp.pop()
  }
};