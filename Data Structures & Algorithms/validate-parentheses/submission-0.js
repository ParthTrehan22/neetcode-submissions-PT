class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let index = 0, stack = []; 
        while(index < s.length){
            if(['[', '{', '('].includes(s.charAt(index))){
                stack.push(s.charAt(index));
            }else{
                const closingBracket = s.charAt(index) ===  ']' ? '[' : s.charAt(index) === '}' ? '{' : '(';
                if(stack[stack.length - 1] !== closingBracket){
                    return false;
                }   
                stack.pop();
            }
            index++;
        }
        if(stack.length){
            return false;
        }
        return true;
    }
}
