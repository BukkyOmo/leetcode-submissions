// https://leetcode.com/problems/number-of-good-pairs

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let visited = {};
  let count = 0;
  let len = nums.length;
  for(let i = 0; i < len; i++){
    if(nums[i] in visited){
      count += visited[nums[i]];
      visited[nums[i]]++;
    }else{
      visited[nums[i]] = 1
    }
  }
  return count;
};