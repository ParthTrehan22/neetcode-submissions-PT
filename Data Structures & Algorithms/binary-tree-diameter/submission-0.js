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
    maxDiameter = 0;

    diameter(root){
        if(root.left === null && root.right === null){
            return 1;
        }

        let leftSubtree = 0, rightSubtree = 0; 
        if(root.left !== null){
            leftSubtree = this.diameter(root.left);
        }
        if(root.right !== null){
            rightSubtree = this.diameter(root.right);
        }
        this.maxDiameter = leftSubtree+rightSubtree > this.maxDiameter ? leftSubtree + rightSubtree : this.maxDiameter; 
        return Math.max(leftSubtree, rightSubtree) + 1;
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        this.diameter(root);
        return this.maxDiameter;
    }
}
