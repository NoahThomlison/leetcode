/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  let commonPrefix = ""
  let commonLetter = ""
  let uncommonLetter = false
  let i = 0
  while (uncommonLetter === false){
    for(let j = 0; j < strs.length; j++){
      if(strs[j][i] === undefined){
        uncommonLetter = true
        break
      }
      if(j == 0){
        commonLetter = strs[j][i]
        console.log(`commonLetter: ${commonLetter}`)
      }
      if(strs[j][i] !== commonLetter){
        uncommonLetter = true
        break
      }
      if(j === strs.length-1){
        commonPrefix += commonLetter
      }
    }
    console.log(`commonPrefix: ${commonPrefix}`)
    i++
  }
  return(commonPrefix)
};