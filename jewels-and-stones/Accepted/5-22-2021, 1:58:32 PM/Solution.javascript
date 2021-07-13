// https://leetcode.com/problems/jewels-and-stones

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
   let obj = {};
   let jewelsLength = jewels.length;
   let stonesLength = stones.length;
   let counter = 0;

   for(let i = 0; i < jewelsLength; i++){
     obj[jewels[i]] = i;
   };

   for(let i = 0; i < stonesLength; i++){
     if(stones[i] in obj)counter += 1;
   };
  return counter;
};