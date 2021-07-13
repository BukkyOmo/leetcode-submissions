// https://leetcode.com/problems/count-items-matching-a-rule

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    if(!items || items.length === undefined) return 0;
    const len = items.length;
    let counter = 0;
    for(let i = 0; i < len; i++){
      if(ruleKey === 'type' && items[i][0] == ruleValue){
      counter++;
      }else if(ruleKey == 'color' && items[i][1] == ruleValue){
        counter++;
      }else if(ruleKey == 'name' && items[i][2] === ruleValue){
        counter++;
      }
    }
    return counter;
};