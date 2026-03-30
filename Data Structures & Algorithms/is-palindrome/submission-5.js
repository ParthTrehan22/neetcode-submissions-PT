class Solution {
    sanitize(s){
        let output = '';
        for(let element in s){
            if(/^[a-z0-9]+$/i.test(s.charAt(element))){
                output = output + s.charAt(element).toLowerCase();
            }
        }
        return output;
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let sanitizedInput = this.sanitize(s);
        let i = 0, j = sanitizedInput.length-1;
        
        while(i < j){
            if(sanitizedInput.charAt(i) !== sanitizedInput.charAt(j)){
                return false;
            }
            i++; j--;
        } 
        return true;
    }
}
