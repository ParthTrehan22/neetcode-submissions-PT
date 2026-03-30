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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let tempNext = new ListNode(), length = 0, counter = 0;
        tempNext = head;
        while(tempNext !== null){
            length++;
            tempNext = tempNext.next;
        }
        tempNext = head;
        let diff = length - n;
        if(diff === 0){
            if(length === 1){
                return null;
            }
            tempNext = tempNext.next;
            return tempNext;
        }
        while(tempNext !== null){
            if(length - n - 1 === counter){
                tempNext.next = tempNext.next.next;
            }
            counter++;
            tempNext = tempNext.next;
        }
        return head;
    }
}
