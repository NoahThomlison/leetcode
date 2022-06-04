/**
 * @param {string} s
 * @return {number}
 */
 var countSegments = function(s) {
  let splitString = s.split(" ")
  for(let i = 0; i < splitString.length; i++){
    if(splitString[i] === ""){
      splitString.splice(i, 1)
      i--
    }
  }
  return(splitString.length)
};