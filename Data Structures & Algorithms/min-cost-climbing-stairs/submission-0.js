class Solution {

    helper(cost, index, minCost){
        if(index >= cost.length){
            console.log(index, minCost);
            return minCost;
        }
        let left = this.helper(cost, index+1, minCost+cost[index]);
        let right = this.helper(cost, index+2, minCost+cost[index]);
        return Math.min(left, right);
    }
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let left = this.helper(cost, 0, 0), right = this.helper(cost, 1, 0);
        return Math.min(left, right);
    }
}
