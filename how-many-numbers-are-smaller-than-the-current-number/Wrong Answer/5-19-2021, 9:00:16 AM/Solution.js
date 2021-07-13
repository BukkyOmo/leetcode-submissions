// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const sortedArray = [...nums].sort();
  const len = nums.length;
  const result = [];
  for(let i = 0; i < len; i++){
    result .push(sortedArray.indexOf(nums[i]))
  }
  return result;
};