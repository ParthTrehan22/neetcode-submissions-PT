/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {

    height(root){
        if(root === null){
            return 0;
        }
        if(root.left === null && root.right === null){
            return 1;
        }
        let left = 0, right = 0;
        if(root.left){
            left = this.height(root.left);
        }
        if(root.right){
            right = this.height(root.right);
        }
        return 1 + Math.max(left, right);
    }

    isBalancedHelper(root) {
        if(root === null || (root.left === null && root.right === null)){
            return true;
        }
        let left, right;
        left = this.height(root.left);
        right = this.height(root.right);
        if(Math.abs(left - right) > 1){
            return false;
        }
        return this.isBalancedHelper(root.left) && this.isBalancedHelper(root.right);
    }

    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if(root === null || (root.left === null && root.right === null)){
            return true;
        }
        return this.isBalancedHelper(root);
    }
}
