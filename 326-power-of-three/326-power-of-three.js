/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
  let isHigher = false 
  let sum = 1
  let validN = false
  while(isHigher === false){
    if(sum > n){
      isHigher = true
    }
    if(sum === n){
      validN = true
      break
    }
    sum = sum * 3
  }
  return(validN)
};