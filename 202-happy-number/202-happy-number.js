/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let isHappyNumber = false
    nLength = n.toString().split("")
    total = 0
    let foundNumbers = []
    while(!isHappyNumber){
    for(let i = 0; i < nLength.length; i++){
      nLength[i] = parseInt(nLength[i]) * parseInt(nLength[i]) 
      total += nLength[i]
    }
    if(total === 1){
      isHappyNumber = true
    }
    else{
      nLength = total.toString().split("")
    }
    if(foundNumbers.includes(total)){
      break
    }
    foundNumbers.push(total)

    total = 0
  }
  return(isHappyNumber)
};