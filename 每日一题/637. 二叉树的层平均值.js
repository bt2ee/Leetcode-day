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
var averageOfLevels = function(root) {
  if (!root) return
  let map = {},
    result = []
  backtrack(root, 0)
  Object.values(map).forEach(element => {
    result.push((element.value / element.num))
  });
  return result

  function backtrack(root, deep) {
    if (!root) return
    if (!map[deep]) map[deep] = { value: 0, num: 0 }
    map[deep].value += root.val
    map[deep].num += 1
    if (root.left) backtrack(root.left, deep + 1)
    if (root.right) backtrack(root.right, deep + 1)
  }
};
