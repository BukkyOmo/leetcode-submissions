// https://leetcode.com/problems/running-sum-of-1d-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
      let result = [];
    for(let i = 0; i < nums.length; i++){
      if(result.length === 0){
        result.push(nums[i]);
      }else{
        result[i] = result[result.length - 1] + nums[i];
      }
    }
    return result;
};