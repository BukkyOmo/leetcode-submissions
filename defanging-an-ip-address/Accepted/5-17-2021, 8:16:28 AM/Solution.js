// https://leetcode.com/problems/defanging-an-ip-address

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  const arr = address.split('')
    for(letter in arr){
      if(arr[letter] == '.'){
          arr[letter] = '[.]';
      }
    }
    return arr.join('');
};