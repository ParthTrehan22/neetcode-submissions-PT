class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let counterPart = new Map();
    for (let num = 0; num < nums.length; num++) {
      if (counterPart.has(target - nums[num])) {
        return num < counterPart.get(target - nums[num])
          ? [num, counterPart.get(target - nums[num])]
          : [counterPart.get(target - nums[num]), num];
      } else {
        counterPart.set(nums[num], num);
        console.log(counterPart.size);
        
      }
    }
    return [-1, -1];
  }
}