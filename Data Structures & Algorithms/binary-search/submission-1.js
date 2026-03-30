class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let minIndex = 0, maxIndex = nums.length, mid;
        while(minIndex <= maxIndex){
            mid = Math.floor((minIndex + maxIndex)/2);
            if(nums[mid] === target){
                return mid;
            }else if(nums[mid] < target){
                minIndex = mid + 1;
            }else{
                maxIndex = mid - 1;
            }
        }
        return -1;
    }
}
