// https://leetcode.com/problems/max-consecutive-ones

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let started = false;
    let counter = 0;
    let max = 0;
    for(let i = 0; i < nums.length; i++){
      if(nums[i] === 1){
        started = true;
        counter++;
      }else{
        started = false;
        counter = 0;
      }
      if(counter > max){
        max = counter;
      }
    }
    return max;
};