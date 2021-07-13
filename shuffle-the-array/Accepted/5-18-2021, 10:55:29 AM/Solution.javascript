// https://leetcode.com/problems/shuffle-the-array

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const result = [];
    let pointer = n;
    for(let i = 0; i < n; i++){
      result.push(nums[i]);
      result.push(nums[pointer]);
      pointer++;
    }
      return result;
};