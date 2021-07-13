// https://leetcode.com/problems/replace-all-digits-with-characters

/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const arr = s.split('');
    for(let i = 0; i < arr.length; i++){
      if(/^[0-9]+$/.test(arr[i])){
        let digitIndex = alphabet.indexOf(arr[i-1]) + parseInt(arr[i]);
        arr[i] = alphabet[digitIndex];
      }
    }
    return arr.join('');
};