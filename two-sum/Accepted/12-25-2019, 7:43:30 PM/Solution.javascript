// https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {};
    let compliment;
    for(let i = 0; i < nums.length; i++){
        obj[i] = nums[i];
        compliment = target - obj[i];
        if(i === Object.values(obj).indexOf(compliment)) continue;
        if(Object.values(obj).includes(compliment)){
            return [Object.values(obj).indexOf(compliment), i];
        }
    }
};