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
    getLength(head){
        if(head === null){
            return 0;
        }
        return 1 + this.getLength(head.next);
    }
    revLL(head, prev){
        if(head === null){
            return head;
        }
        let nextNode = head.next;
        head.next = prev;
        if(nextNode === null){
            return head;
        }
        return this.revLL(nextNode, head);
    }

    mergeLL(head1, head2){
        let head = head1, temp1, temp2;
        while(head1 !== null && head2 !== null){
            temp1 = head1.next;
            temp2 = head2.next;
            head1.next = head2;
            head2.next = temp1;
            head2 = temp2;
            head1 = temp1;
            console.log(head1, head2);
        }
        return head;
    }    
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let len = this.getLength(head);
        let mid = Math.floor(len / 2), index = 0, head1 = head, head2;
        while(index < mid){
            head1 = head1.next;
            index++;
        }
        head2 = head1.next;
        head1.next = null;
        head1 = head;
        let revHead = this.revLL(head2, null);
        let newHead = this.mergeLL(head, revHead);
        return newHead;
    }
}
