class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let index = 1;
        let ans = nums[0];
        while(index < nums.length){
            ans = ans ^ nums[index];
            index++;
        }
        return ans;
    }
}
