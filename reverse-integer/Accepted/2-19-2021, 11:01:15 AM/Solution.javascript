// https://leetcode.com/problems/reverse-integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse_num = parseInt(x.toString().split('').reverse().join(''));
    if(reverse_num > (Math.pow(2, 31) - 1)){
        return x = 0
    }
    return reverse_num * Math.sign(x)
};