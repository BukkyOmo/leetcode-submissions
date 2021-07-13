// https://leetcode.com/problems/reverse-integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse_num = parseInt(x.toString().split('').reverse().join(''));
    result = reverse_num > (Math.pow(2, 31) - 1) || reverse_num < -(Math.pow(2, 31)) ? 0 : reverse_num
    return result * Math.sign(x);
};