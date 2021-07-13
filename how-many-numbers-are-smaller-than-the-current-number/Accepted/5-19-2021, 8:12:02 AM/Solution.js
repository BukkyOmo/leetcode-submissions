// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let len = nums.length;
  const result = [];
    for(let i = 0; i < len; i++){
      let count = 0;
      for(let j = 0; j < len; j++){
        if(nums[i] !== nums[j] && nums[i] > nums[j]){
          count += 1;
        }
      }
    result.push(count)
    }
    return result;
};