class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        # nums.sort()
        # i = 0 
        # j = len(nums) - 1
        # while i < j:
        #     if((nums[i] + nums[j]) == target and i >= 0 and j < len(nums)):
        #         return [i, j]
        #     elif (nums[i]+nums[j] < target):
        #         i+=1
        #     else :
        #         j-=1
            
        # return []
        occurences = {}
        # for index, i in enumerate(nums):
        #     if occurences.get(target - i) == None:
        #         occurences.update({i: index})
        #     # else :
        #     #     occurences.update({i: occurences.get(i) + 1})
        for index, j in enumerate(nums):
            if  occurences.get(target - j) != None:
                return [occurences.get(target - j), index]
            else : 
                occurences.update({j: index})
        return []