/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let h1 = new ListNode(-1),
    h2 = new ListNode(-1)
  let p1 = h1,
    p2 = h2
  while (head) {
    if (head.val < x) {
      p1.next = head
      p1 = p1.next
    } else {
      p2.next = head
      p2 = p2.next
    }
    head = head.next
  }
  p2.next = null
  p1.next = h2.next
  return h1.next
};