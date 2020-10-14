/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
  let current = head,
    count = 0
  while (current) {
    count++
    current = current.next
  }
  const s = count - k
  current = head
  while (s) {
    current = current.next
    s--
  }
  return current.val
};