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
    
    maxdepth(root,  height){
        if(root === null){
            return height;
        }
        let rightHeight, leftHeight;
        
        leftHeight = this.maxdepth(root.left, height + 1);
        rightHeight = this.maxdepth(root.right, height + 1);
        return leftHeight > rightHeight ? leftHeight : rightHeight;
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        return this.maxdepth(root, 0);
    }
}
