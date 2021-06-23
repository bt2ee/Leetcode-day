/**
 * 题目地址： https://binarysearch.com/problems/Top-View-of-a-Tree
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */
class Solution {
  solve(root) {
    if (!root) return []
    let queue = [
        [root, 0]
      ],
      result = [root.val],
      view = new Set();
    view.add(0);

    while (queue.length) {
      const [node, cor] = queue.shift();
      if (!view.has(cor)) {
        if (cor > 0) {
          result.push(node.val);
        } else {
          result.unshift(node.val);
        }
        view.add(cor)
      }
      node.left && queue.push([node.left, cor - 1]);
      node.right && queue.push([node.right, cor + 1]);
    }
    return result;
  }
}