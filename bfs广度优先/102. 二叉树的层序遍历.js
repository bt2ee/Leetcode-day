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
var levelOrder = function(root) {
  if (root == null) return [];
  let res = [],
    queue = [root];

  while (queue.length > 0) {
    let length = queue.length;
    res.push([]);

    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      res[res.length - 1].push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return res;
};

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
var levelOrder = function(root) {
  if (root == null) return []
  let result = [],
    queue = [root],
    nextQueue = [],
    temp = []

  while (queue.length > 0) {
    let node = queue.shift()
    temp.push(node.val)
    if (node.left) { nextQueue.push(node.left) }
    if (node.right) {
      nextQueue.push(node.right)
    }
    if (queue.length === 0) {
      result.push([...temp])
      temp = []
      queue = nextQueue
      nextQueue = []
    }
  }
  return result
};