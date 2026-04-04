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
    helper(root, subRoot){
        if(root === null && subRoot === null){
            return true;
        }
        if((root === null && subRoot !== null) || root !== null && subRoot === null){
            return false;
        }
        if(root.val !== subRoot.val){
            return false;
        }
        if((root.left !== null && subRoot.left === null) || (root.left === null && subRoot.left !== null) || (root.right !== null && subRoot.right === null) || (root.right === null && subRoot.right !== null)){
            return false;
        }
        console.log(root.val, subRoot.val);
        return this.helper(root.left, subRoot.left) && this.helper(root.right, subRoot.right);
    }
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if((root === null && subRoot !== null) || root !== null && subRoot === null){
            return false;
        }
        if(root === null && subRoot === null){
            return true;
        }
        let partialAns;
        if(root.val === subRoot.val){
            partialAns = this.helper(root.left, subRoot.left) && this.helper(root.right, subRoot.right);
            if(partialAns){
                return partialAns;
            }
        }
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
}
