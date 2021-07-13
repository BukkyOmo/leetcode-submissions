// https://leetcode.com/problems/shuffle-string

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let str = '';
    for(let i = 0; i < s.length; i++){
      for(let j = 0; j < indices.length; j++){
        if(i === indices[j]){
          str += s[j]
        }
      }
    }
    return str
};