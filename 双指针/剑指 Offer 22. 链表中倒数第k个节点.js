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
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  let current = head
  let count = 0
  while (current) {
    count++
    current = current.next
  }
  let s = count - k
  current = head
  while (true) {
    if (s <= 0) {
      return current
    }
    s--
    current = current.next
  }
};