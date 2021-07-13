// https://leetcode.com/problems/remove-duplicates-from-sorted-array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(!nums || nums.length == undefined) return 0;

   let pointer1 = 0;

   for(let pointer2 = 0; pointer2 < nums.length; pointer2++){
     if(nums[pointer1] != nums[pointer2]){
       pointer1++;
       nums[pointer1] = nums[pointer2]
     }
   }
   return pointer1 + 1; 
};