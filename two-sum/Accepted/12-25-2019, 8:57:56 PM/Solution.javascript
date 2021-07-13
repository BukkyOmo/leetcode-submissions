// https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let obj = {};
    for(let i = 0; i < nums.length; i++){
        obj[i] = nums[i];
        let compliment = target - obj[i];
        if(i === nums.indexOf(compliment)) continue;
        if(nums.includes(compliment))
            return [nums.indexOf(compliment), i];
    }
  return [];
};