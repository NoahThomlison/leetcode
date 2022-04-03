/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  let values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let answer = 0
  for(index = s.length-1; index >= 0; index--){
    if(values[s[index-1]] < values[s[index]]){
      answer += values[s[index]] - values[s[index-1]]
      index -= 1
    }
    else{
      answer += values[s[index]]
    }
  }
  return(answer)
};
