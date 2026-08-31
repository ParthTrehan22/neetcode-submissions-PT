class Solution:
    def isPalindrome(self, s: str) -> bool:
        lowercase_str = s.casefold()
        i = 0
        j = len(lowercase_str) - 1
        print(ord(lowercase_str[i]), ord(lowercase_str[j]))

        while i < j:
            if lowercase_str[i].isalnum() and lowercase_str[j].isalnum():
                if ord(lowercase_str[i]) != ord(lowercase_str[j]): 
                    print(lowercase_str[i], lowercase_str[j])
                    return False
                else:
                    i = i + 1
                    j = j - 1
            elif lowercase_str[i].isalnum() and not lowercase_str[j].isalnum():
                j = j - 1
            elif not lowercase_str[i].isalnum() and lowercase_str[j].isalnum():
                i = i + 1
            else: 
                i = i + 1
                j = j - 1
        return True