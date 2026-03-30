class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const occurences = new Set();
    for (let num of nums) {
      if (occurences.has(num)) {
        return true;
      }
      occurences.add(num);
    }
    return false;
    }
}
