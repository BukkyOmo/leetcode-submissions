// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  if(!numbers ||numbers.length < 2 || numbers.length == undefined) return 0
    let i = 0; 
    let pointer = numbers.length - 1;
    while(i < pointer){
        if(numbers[i] + numbers[pointer] == target){
            return [i+1,pointer+1];
        }else if(numbers[i] + numbers[pointer] > target){
            pointer--;
        }else{
            i++;
        }
    }
    return [0,0];
};