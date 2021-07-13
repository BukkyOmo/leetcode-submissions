// https://leetcode.com/problems/palindrome-number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reversedNum = parseInt(x.toString().split('').reverse().join(''));
    const result = reversedNum === x ? true : false;
    return result;
};