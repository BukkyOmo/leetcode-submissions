// https://leetcode.com/problems/decompress-run-length-encoded-list

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const result = [];
    const len = nums.length;
    for(let i = 0; i < len; i +=2){
        let freq = nums[i];
        let val = nums[i+1];
        result.push(...Array(freq).fill(val));
    }
    return result;
};