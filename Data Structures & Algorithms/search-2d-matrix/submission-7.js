class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let noOfCol = matrix[0].length-1, noOfRow = matrix.length, i = 0, j = noOfRow, midRow, foundRow = false;
        while(i <= j && i < noOfRow){
            midRow = Math.floor((i+j)/2);
            if(matrix[midRow][0] === target || matrix[midRow][noOfCol] === target){
                return true;
            }
            if(matrix[midRow][0] < target && matrix[midRow][noOfCol] > target){
                foundRow = true;
                break;
            }else if (matrix[midRow][0] < target && matrix[midRow][noOfCol] < target){
                i = midRow + 1;
            }else{
                j = midRow - 1;
            }
        }
        i = midRow;
        console.log('foundRow',foundRow);
        if(!foundRow){
            return false;
        }
        let x = 0, y = noOfCol;
        while(x < y){
            midRow = Math.floor((x+y)/2);
            console.log('midRow', midRow);
            console.log('i', i);
            if(matrix[i][midRow] === target){
                return true;
            }else if(matrix[i][midRow] < target){
                x = midRow + 1;
            }else{
                y = midRow - 1;
            }
        }
        return false;
    }
}
