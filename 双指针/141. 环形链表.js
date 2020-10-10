/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next) {
    return false
  }
  let fast = head.next,
    last = head
  while (fast !== last) {
    if (!fast || !fast.next) {
      return false
    }
    fast = fast.next.next
    last = last.last
  }
  return true
};