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

    getNum(node){
        let index = 0, total = 0;
        while(node !== null){
            total = total + (Math.pow(10, index) * node.val);
            node = node.next;
            index++;
        }
        return total;
    }

    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let num1, num2, total, head = new ListNode(), tempHead = new ListNode();
        num1 = this.getNum(l1);
        num2 = this.getNum(l2);
        total = num1 + num2;
        console.log('total', total);
        head.val = total % 10;
        total = Math.floor(total / 10);
        tempHead = head;
        while(total > 0){
            const mover = new ListNode(total%10);
            total = Math.floor(total / 10);
            tempHead.next = mover;
            tempHead = tempHead.next;
        }
        return head;
    }
}
