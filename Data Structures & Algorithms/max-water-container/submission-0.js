class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        for(let i = 0 ; i < heights.length; i++){
            for(let j = i+1 ; j < heights.length; j++){
                const height = heights[i] > heights[j] ? heights[j] : heights[i];
                maxArea = maxArea > height*(j-i) ? maxArea : height*(j-i);
            }
        }
        return maxArea;
    }
}
