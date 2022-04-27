/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let indexOfNumber
  let foundNumbers = []
  for(let i = 0; i < nums.length ; i++){
    indexOfNumber = (nums.slice(i+1).indexOf(nums[i]))
    if (foundNumbers.includes(nums[i])){
      continue
    }
    else if(indexOfNumber === -1){
      indexOfNumber = nums[i]
      break
    }
    else{
      foundNumbers.push(nums[i])
    }
  }
  return(indexOfNumber)
};