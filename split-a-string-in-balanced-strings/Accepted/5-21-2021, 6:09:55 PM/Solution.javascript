// https://leetcode.com/problems/split-a-string-in-balanced-strings

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
   let balance = 0;
   let left = 0;
   let right = 0;
   for(let i = 0; i < s.length; i++){
     if(s[i] === 'L')left++;
     if(s[i] === 'R')right++;
     if(right === left) balance++;
   }
   return balance; 
};