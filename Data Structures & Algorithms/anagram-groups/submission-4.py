class Solution:
    def isAnagram(self, s1: str, s2: str) -> bool :
        if(len(s1) != len(s2)):
            return False
        if(s1 == s2):
            return True
        chars = {}
        for i in s1:
            if(chars.get(i) == None):
                chars.update({i: 1})
            else :
                chars.update({i: chars.get(i) + 1})
        
        for j in s2:
            if(chars.get(j) == None or chars.get(j) == 0):
                return False
            else:
                chars.update({j: chars.get(j) - 1})
        return True

    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = {}
        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord('a')] += 1
            key = tuple(count)
            if key not in res:
                res[key] = []
            res[key].append(s)
        return list(res.values())