class Solution {
    checkAll(piles, banana){
        let total = 0;
        piles.forEach((val)=>{
            total += Math.ceil(val/banana);
        })
        return total;
    }
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let minVal, maxVal = piles[0];
        piles.forEach((val) => {
            maxVal = maxVal > val ? maxVal : val;
        })
        let low = 1, high = maxVal, currMinimum = Number.MAX_VALUE, mid;
        while(low <= high){
            mid = Math.floor((low+high)/2);
            const checkedMin = this.checkAll(piles, mid);
            if(checkedMin <= h){
                currMinimum = mid < currMinimum ? mid : currMinimum; 
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }
        return currMinimum;
    }
}

