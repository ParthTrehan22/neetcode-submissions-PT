class Solution:
    def isValid(self, s: str) -> bool:
        # char = {
        #     '{' : '}',
        #     '(' : ')',
        #     '[' : ']'
        # }
        char = []

        index = 0

        while index < len(s) :
            if s[index] == '{' or s[index] == '[' or s[index] == '(' : 
                char.append(s[index])
            elif s[index] == '}' or s[index] == ']' or s[index] == ')' :
                if len(char) == 0:
                    return False
                if s[index] == '}' and char.pop() != '{':
                    return False
                elif s[index] == ']' and char.pop() != '[':
                    return False
                elif s[index] == ')' and char.pop() != '(':
                    return False
            index += 1
        if len(char) == 0 :
            return True
        else :
            return False

