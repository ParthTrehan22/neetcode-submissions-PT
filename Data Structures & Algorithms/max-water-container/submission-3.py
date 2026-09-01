class Solution:
    def maxArea(self, heights: List[int]) -> int:
        index1 = 0 
        index2 = len(heights) - 1
        max_ans = 0
        sub_ans = 0
        while(index1 < index2):
            sub_ans = sub_max = min(heights[index1],heights[index2]) * (index2-index1)
            if sub_ans > max_ans :
                max_ans = sub_ans
            sub_ans = 0
            if heights[index1] >= heights[index2] :
                index2 = index2 - 1
            else :
                index1 = index1 + 1
        return max_ans    

        # brute force
        # index1 = 0
        # max_water = 0
        # while index1 < len(heights) - 1:
        #     index2 = index1 + 1
        #     sub_max = 0
        #     while index2 < len(heights):
        #         sub_max = min(heights[index1],heights[index2]) * (index2-index1)
        #         if sub_max > max_water:
        #             max_water = sub_max
        #         sub_max = 0
        #         index2 = index2 + 1
        #     index1 = index1 + 1
        # return max_water