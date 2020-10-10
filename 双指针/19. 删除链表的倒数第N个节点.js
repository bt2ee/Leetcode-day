/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head || !head.next) return null
  let preHead = new ListNode(0)
  preHead.next = head
  let fast = preHead,
    slow = preHead
  for (let i = 1; i <= n; i++) {
    fast = fast.next
  }

  while (fast && fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return preHead.next
};