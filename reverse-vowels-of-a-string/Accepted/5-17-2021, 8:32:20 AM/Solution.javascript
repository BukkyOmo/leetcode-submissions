// https://leetcode.com/problems/reverse-vowels-of-a-string

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const strToArr = s.split('');
    const vowels = [];
    for(letter in strToArr){
      if((/^[aeiou]$/i).test(strToArr[letter])){
        vowels.push(strToArr[letter])
      }
    }
    const reversedVowel = reverseArray(vowels);

    let idx = 0;
    for(letter in strToArr){
      if((/^[aeiou]$/i).test(strToArr[letter])){
        strToArr[letter] = reversedVowel[idx++]
      }
    }
    return strToArr.join('')
};

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