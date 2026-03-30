class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }

        const chars = new Map();

        for(let character of s){
            if(chars.has(character)){
                chars.set(character, chars.get(character)+1);
            }else{
                chars.set(character, 1);
            }
        }

        for(let character of t){
            if(chars.has(character) && chars.get(character) > 0){
                chars.set(character, chars.get(character)-1);
            }else{
                return false;
            }
        }
        return true;
    }
}
