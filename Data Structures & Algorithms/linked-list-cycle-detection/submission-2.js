/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = new ListNode(), fast = new ListNode();
        slow = head;
        fast = head.next;
        while(slow !== null && fast !== null){
            if(slow.val === fast.val){
                return true;
            }
            slow = slow.next;
            if(fast.next !== null){
                fast = fast.next.next;
            }else{
                return false;
            }
        }
        return false;
    }
}
