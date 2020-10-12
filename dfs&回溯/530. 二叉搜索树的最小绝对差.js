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
var getMinimumDifference = function(root) {
  let preNodeVal = -1,
    minValue = Infinity;

  const recursion = (root) => {
    if (!root) return;
    if (root.left) {
      recursion(root.left);
    }
    if (preNodeVal > -1) {
      minValue = Math.min(root.val - preNodeVal, minValue);
    }
    preNodeVal = root.val;
    if (root.right) {
      recursion(root.right);
    }
  };
  recursion(root);
  return minValue;
};