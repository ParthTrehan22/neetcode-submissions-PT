class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = new Array(), prod = 1;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] === 0){
                prod = 0;
                break;
            }
            prod *= nums[i];
        }
        for(let j = 0; j < nums.length; j++){
            if(prod === 0){
                if(nums[j] === 0){
                    let subProd = 1;
                    for(let k = 0; k < nums.length; k++){
                        if(j === k){
                            continue;
                        }else{
                            subProd *= nums[k];
                        }
                    }
                    output[j] = subProd;
                }else{
                    output[j] = 0;
                }
            }else{
                output[j] = prod / nums[j];
            }
        }
        return output;
    }
}
