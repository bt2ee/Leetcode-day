/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head) return null
  let temp = []
  let tempHead = head;
  while (tempHead) {
    temp.push(tempHead)
    tempHead = tempHead.next
  }
  let left = 1,
    right = temp.length - 1
  while (left <= right) {
    head.next = temp[right]
    right--
    head = head.next
    head.next = temp[left]
    left++
    head = head.next
  }
  head.next = null
};