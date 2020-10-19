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
var rotateRight = function(head, k) {
  if (!head) return null
  let length = 1,
    first = head,
    last = head;
  while (first.next) {
    length += 1;
    first = first.next
  }
  k = k % length;

  if (k == 0) return head;
  for (let i = 1; i < length - k; i++) {
    last = last.next
  }
  first.next = head
  head = last.next
  last.next = null
  return head
};

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
var rotateRight = function(head, k) {
  let fast = head,
    slow = head
  while (k--) {
    if (fast && fast.next) fast = fast.next
    else fast = head
  }
  if (slow === fast) return head
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  fast.next = head
  head = slow.next
  slow.next = null
  return head
};