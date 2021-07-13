// https://leetcode.com/problems/check-if-the-sentence-is-pangram

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
     if(!sentence.length || sentence.length > 1000) return 0;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetObj = {};

    for(let i = 0; i < alphabet.length; i++){
      alphabetObj[alphabet[i]] = 0;
    };

    for(let i = 0; i < sentence.length; i++){
      if(sentence[i] in alphabetObj){
        alphabetObj[sentence[i]] += 1;
      }
    }
    if(!Object.values(alphabetObj).includes(0)){
      return true
    }else{
      return false
    } 
};