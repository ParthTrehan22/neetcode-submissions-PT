class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:

        if len(nums) == 0: 
            return 0

        queue = []
        nums = list(set(nums))
        for i in nums:
            if len(queue) == 0 :
                queue.append(i)
            else :
                insertion_index = len(queue) - 1
                if queue[insertion_index] > i:
                    while queue[insertion_index] > i and insertion_index >= 0:  
                        insertion_index = insertion_index - 1
                    queue.insert(insertion_index + 1, i)
                else:
                    queue.append(i)
        max_len = 0
        sub_len = 1
        index = 0
        print(queue)
        
        while index < len(queue) - 1 :
            if abs(queue[index + 1] - queue[index]) == 1 :
                sub_len = sub_len + 1
            else :
                if max_len < sub_len:
                    max_len = sub_len
                sub_len = 1
            index = index + 1

        if max_len < sub_len:
            max_len = sub_len
        return max_len



                
