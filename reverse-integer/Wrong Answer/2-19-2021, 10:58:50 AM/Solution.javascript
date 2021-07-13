// https://leetcode.com/problems/reverse-integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse_num = parseInt(x.toString().split('').reverse().join(''));
    return reverse_num * Math.sign(x)
};