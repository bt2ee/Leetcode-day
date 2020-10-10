/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let fast = head.next,
    slow = head
  while (fast) {
    if (!fast || !fast.next) return null
    fast = fast.next.next
    slow = slow.next
    if (slow === fast) {
      fast = head
      while (true) {
        if (fast === slow) {
          return fast
        }
        fast = fast.next
        slow = slow.next
      }
    }
  }
  return null
};