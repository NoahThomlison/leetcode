/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  let stringx = x.toString()
  let stringxReverse = stringx.split('').reverse()
  let stringxReverseJoined = stringxReverse.join("")

  if(stringxReverseJoined === stringx){
    return(true)
  }
  return(false)
}