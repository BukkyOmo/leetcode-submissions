// https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let obj = {};
    for(let i = 0; i<nums.length; i++){
        let complement = target - nums[i];
        if(complement in obj) return [nums.indexOf(complement), i];
        else obj[nums[i]] = i
    }
    return [];
};