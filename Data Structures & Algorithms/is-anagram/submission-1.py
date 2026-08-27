class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        chars = {}
        for char in s:
            if chars.get(char) == None:
                chars.update({char: 1})
            else :
                chars.update({char: chars.get(char) + 1})
        for char in t:
            if chars.get(char) == None:
                return False
            elif chars.get(char) == 1:
                chars.pop(char)
            else :
                chars.update({char: chars.get(char) - 1})
        if len(chars.keys()) == 0 :
            return True
        else :
            return False
