class Solution {
    helper(nums, index, memo){
    if (index >= nums.length) return 0;
    if (memo[index] !== undefined) return memo[index];

    // Take current -> skip next: nums[index] + helper(index + 2)
    const take = nums[index] + this.helper(nums, index + 2, memo);
    // Skip current -> move to next
    const skip = this.helper(nums, index + 1, memo);

    const best = Math.max(take, skip);
    memo[index] = best;
    return best;
  }

  rob(nums) {
    if (nums.length === 0) return 0;
    // Use a memo array/map to store results per index
    const memo = {};
    return this.helper(nums, 0, memo);
  }
}
