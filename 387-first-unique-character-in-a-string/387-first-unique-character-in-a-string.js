/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
  let index
  let uniqueIndex = -1
  let foundDoubles = []
    for(let i = 0 ; i < s.length ; i++){
      index = s.indexOf(s[i], i+1)
      if(index === -1 && !foundDoubles.includes(s[i])){
        uniqueIndex = i
        break
      }
      else{
        foundDoubles.push(s[i])
      }
    }
    return(uniqueIndex)
};