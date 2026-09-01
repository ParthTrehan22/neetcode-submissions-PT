class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        lowest_price = prices[0]
        index = 1
        max_prof = 0
        sub_prof = 0
        while index < len(prices):
            if prices[index] < lowest_price:
                lowest_price = prices[index]
            else:
                sub_prof = prices[index] - lowest_price
                if sub_prof > max_prof:
                    max_prof = sub_prof
                sub_prof = 0
            index = index + 1
        return max_prof