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
     * @return {ListNode}
     */
    reverseList(head) {
        if(head === null || head.next === null){
            return head;
        }
        let elements = [];
        while(head !== null){
            elements.push(head.val);
            head = head.next;
        }
        let newHead = new ListNode(elements[elements.length-1], null);
        let currNode = new ListNode();
        newHead.next = currNode;
        for(let i = elements.length-2; i >= 0; i--){
            console.log(i);
            let newNode = new ListNode();
            currNode.val = elements[i];
            if(i !== 0)
            currNode.next = newNode;
            currNode = newNode;
        }
        return newHead;
    }
}
