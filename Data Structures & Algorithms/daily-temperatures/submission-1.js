class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    let stack = [],
      index = 0,
      retArr = [].fill(0);

    while (index < temperatures.length) {
      let subIndex = index;
      if (stack.length) {
        if (stack[stack.length - 1] <= temperatures[subIndex]) {
          while (
            stack[stack.length - 1] <= temperatures[subIndex] &&
            subIndex < temperatures.length
          ) {
            subIndex++;
          }
          if (subIndex < temperatures.length) {
            retArr.splice(index, 0, subIndex - index + 1);
          } else {
            retArr.splice(index, 0, 0);
          }
          while (stack.length) {
            stack.pop();
          }
        }
      } else {
        subIndex++;
        if(subIndex === temperatures.length){
            retArr.splice(index, 0, 0);
            break;
        }
        stack.push(temperatures[index]);
        if (stack[stack.length - 1] >= temperatures[subIndex]) {
          while (
            stack[stack.length - 1] >= temperatures[subIndex] &&
            subIndex < temperatures.length
          ) {
            subIndex++;
          }
          if (subIndex < temperatures.length) {
            retArr.splice(index, 0, subIndex - index);
          } else {
            retArr.splice(index, 0, 0);
          }
          while (stack.length) {
            stack.pop();
          }
        } else {
          retArr.splice(index, 0, subIndex - index);
          while (stack.length) {
            stack.pop();
          }
        }
      }
      index++;
    }
    return retArr;
  }
}
