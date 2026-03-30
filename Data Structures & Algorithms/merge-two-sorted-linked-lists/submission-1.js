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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if(list1 === null && list2 === null){
            return list1;
        }
        let newHead = new ListNode();
        let currNode = new ListNode();
        newHead = currNode;
        while(list1 !== null && list2 !== null){
            if(list1.val < list2.val){
                currNode.val = list1.val;
                list1 = list1.next;
                
            }else{
 currNode.val = list2.val;
                list2 = list2.next;
            }
            const newNode = new ListNode();
                currNode.next = newNode;
                currNode = currNode.next;
        }
        while(list1 !== null){
            currNode.val = list1.val;
                list1 = list1.next;
                const newNode = new ListNode();
                if(list1 !== null){
                currNode.next = newNode;
                currNode = currNode.next;
                }
        }
        while(list2 !== null){
            currNode.val = list2.val;
                list2 = list2.next;
                const newNode = new ListNode();
                if(list2 !== null){
                currNode.next = newNode;
                currNode = currNode.next;}
        }
        return newHead;
    }
}
