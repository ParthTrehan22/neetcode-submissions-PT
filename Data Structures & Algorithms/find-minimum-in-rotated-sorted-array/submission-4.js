class Solution {
    
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
    let low = 0, high = nums.length - 1;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] > nums[high]) {
            low = mid + 1;   // min is in the right half
        } else {
            high = mid;       // min is in the left half (including mid)
        }
    }
    return nums[low];
}
}
