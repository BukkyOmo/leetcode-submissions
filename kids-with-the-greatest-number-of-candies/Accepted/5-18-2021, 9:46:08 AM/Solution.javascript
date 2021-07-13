// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = 0;
    let lengthOfCandies = candies.length;
    for(let i = 0; i < lengthOfCandies; i++){
      if(candies[i] > max){
        max = candies[i];
      };
    };

    for(let i = 0; i < lengthOfCandies; i++){
      if(candies[i] + extraCandies >= max){
        candies[i] = true;
      }else{
        candies[i] = false;
      }
    };
    return candies;
};