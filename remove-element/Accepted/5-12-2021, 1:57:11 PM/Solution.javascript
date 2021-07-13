// https://leetcode.com/problems/remove-element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(!nums || nums.length == undefined) return 0;
    let pointer = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != val){
            nums[pointer] = nums[i];
            pointer++;
        }
    }
    return pointer;
};