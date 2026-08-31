class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = {}
        retList = []
        counter = k

        for i in nums:
            if freq.get(i) == None:
                freq.update({i: 1})
            else :
                freq.update({i: freq.get(i) + 1})

        keys = freq.keys()

        # while counter > 0 :
        #     for k in keys:
        #         maximumFreq = 0
        #         maximumKey = -1
        #         if freq.get(k) > maximumFreq:
        #             maximumFreq = freq.get(k)
        #             maximumKey = k
        #         retList.append(maximumKey)
        #         freq.update({maximumKey: None})
        #     counter=-1

        for j in keys:
            if(counter > 0):
                maximumFreq = 0
                maximumKey = -1
                for k in keys:
                    if freq.get(k) > maximumFreq:
                        maximumFreq = freq.get(k)
                        maximumKey = k
                retList.append(maximumKey)
                freq.update({maximumKey: 0})
            else :
                break
            counter=counter - 1
        return retList
