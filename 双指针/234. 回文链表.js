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
var isPalindrome = function(head) {
  let arr = [],
    length = 0
  while (head) {
    length++
    arr.push(head.val)
  }
  let start = 0,
    end = length - 1
  while (start < end) {
    if (arr[start] !== arr[end]) return false
    start++
    end--
  }
  return true
};