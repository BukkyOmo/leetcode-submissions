// https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let result = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = 0;j < nums.length; j++) {
            if(i === j) continue;
            if(nums[i] + nums[j] === target){
                result.push(i, j);
                return result;
            }
        }
    }
};