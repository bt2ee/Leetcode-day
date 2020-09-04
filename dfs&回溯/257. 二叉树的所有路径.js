/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let result = []
  if (!root) return []
  dfs(root, '', result)
  return result
};

var dfs = (root, temp, result) => {
  temp = temp ? temp + '->' + root.val : `${root.val}`

  if (!root.left && !root.right) {
    result.push(temp)
    return
  }
  if (root.left) {
    dfs(root.left, temp, result)
  }
  if (root.right) {
    dfs(root.right, temp, result)
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (root === null) return [];
  if (root.left === null && root.right === null) {
    return [root.val.toString()];
  }
  var left = binaryTreePaths(root.left),
    right = binaryTreePaths(root.right);
  return left.concat(right).map(x => root.val + '->' + x);
};