/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let numberOfSteps = {
      1: 1,
      2: 2,
    }
    let steps = 3
    while (steps <= n){
      numberOfSteps[steps] = numberOfSteps[steps-1] + numberOfSteps[steps-2]
      steps += 1
    }
    return(numberOfSteps[n])
  };