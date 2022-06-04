
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
  let splitString = s.split(" ")
  console.log(splitString)
  let i = splitString.length-1
  while(splitString[i]===""){
    i--
  }
  return(splitString[i].length)
  };