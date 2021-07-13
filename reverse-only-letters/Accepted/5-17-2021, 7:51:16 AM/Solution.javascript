// https://leetcode.com/problems/reverse-only-letters

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
  const convertStrToArray = s.split('');
  const onlyLetters = []; 
  for(letter in convertStrToArray){
    if((/^[A-Za-z]+$/).test(convertStrToArray[letter])){
      onlyLetters.push(convertStrToArray[letter])
    }
  }
  const reversedLetters = reverseArray(onlyLetters)

  let idx = 0;
  for(letter in convertStrToArray){
      if((/^[A-Za-z]+$/).test(convertStrToArray[letter])){
        convertStrToArray[letter] = reversedLetters[idx++]
      }
  }
  return convertStrToArray.join('');
};

reverseOnlyLetters('bukola!!!hey$')

function reverseArray(arr){
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}