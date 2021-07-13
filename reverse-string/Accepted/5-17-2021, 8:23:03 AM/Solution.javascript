// https://leetcode.com/problems/reverse-string

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if(s.length < 1 || s.length === undefined) return 0;
    let left = 0;
    let right = s.length - 1;
    while(left < right){
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    return s;
};