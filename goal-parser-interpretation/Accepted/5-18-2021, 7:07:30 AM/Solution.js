// https://leetcode.com/problems/goal-parser-interpretation

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    const arr = command.split('');
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == '(' && arr[i+1] == ')'){
       arr[i] = 'o';
      }
    }
    return arr.join('').replace(/[^a-zA-Z ]/g, "");
};