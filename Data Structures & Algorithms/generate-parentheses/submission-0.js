class Solution {

    result = [];

    helper(o, c, currStr){
        if(o === 0 && c === 0){
            this.result.push(currStr);
        }
        if(o > c){
            return;
        }
        if(o >= 0){
            this.helper(o-1, c, currStr+'(');
        }
        if(c >= 0){
            this.helper(o, c-1, currStr+')');
        }
        return this.result;
    }

    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        this.helper(n, n, '')
        return this.result;
    }
}
