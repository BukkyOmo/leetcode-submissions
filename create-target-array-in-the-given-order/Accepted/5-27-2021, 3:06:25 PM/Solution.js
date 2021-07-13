// https://leetcode.com/problems/create-target-array-in-the-given-order

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    //create a target array(empty)
    // loop through the index array
    // check
    // if the current index does not exist in target set the index to item at num with same index
    // else loop through nums array
    // start count from behind and stop b4 current index(shifting array el to the right)

    let target = [];
    let i = 0;
    while(i < index.length){
        if(target[index[i]] === -1){
            target[index[i]] = nums[i]
        }else{
            for(let j = nums.length - 1; j > index[i]; j--){
                target[j] = target[j-1]
            }
           target[index[i]] = nums[i] 
        }
        i++;
    }
   return target;
};