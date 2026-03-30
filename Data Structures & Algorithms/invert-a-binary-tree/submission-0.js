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
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if(root === null){
            return root;
        }
        let rootRight, rootLeft;
        
        rootLeft = this.invertTree(root.left);
        rootRight = this.invertTree(root.right);
        root.left = rootRight;
        root.right = rootLeft;

        return root;
    }
}
