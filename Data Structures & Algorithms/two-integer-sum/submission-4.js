class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let dict = new Map();
        for(let i = 0; i < nums.length; i++){
            if(dict.has(target - nums[i])){
                return [dict.get(target - nums[i]), i];
            }
            dict.set(nums[i], i);
        }
        return [];
    }
}
