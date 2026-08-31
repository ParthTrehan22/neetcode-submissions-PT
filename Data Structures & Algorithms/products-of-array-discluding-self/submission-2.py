class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prod = 1
        no_of_zero = 0
        retList = []
        for i in nums:
            if i == 0:
                no_of_zero = no_of_zero + 1
            else: 
                prod = prod * i
        if no_of_zero >= 2:
            for i in nums:
                retList.append(0)
            return retList
        elif no_of_zero == 1:
            for i in nums:
                if i == 0:
                    retList.append(prod)
                else:
                    retList.append(0)
        else:
            for i in nums:
                retList.append(prod//i)
        return retList