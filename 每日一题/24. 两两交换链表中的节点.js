/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let preNode = new ListNode(0)
  preNode.next = head
  let temp = preNode
  while (temp.next !== null && temp.next.next !== null) {
    let start = temp.next,
      end = temp.next.next
    start.next = end.next
    temp.next = end
    end.next = start
    temp = start
  }
  return preNode.next
};