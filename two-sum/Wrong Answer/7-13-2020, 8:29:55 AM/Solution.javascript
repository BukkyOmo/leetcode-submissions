// https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
      const obj = {};
      for(let i = 0; i < nums.length; i++){
          obj[i] = nums[i];
      };

      for(let j = 0; j < nums.length; j++){
        const complement = target - nums[j];
        if(Object.values(obj).includes(complement)){
          return [j, nums.indexOf(complement)];
        }
        return 'no match found'
      };
};