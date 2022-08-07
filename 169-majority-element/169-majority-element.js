/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  let numberToCheck 
  let occurances
  let highestOccurances = 0
  let majorityNumber
    for(let i = 0; i < nums.length; i++){
      occurances = 1
      numberToCheck = nums[i]
      for(let j = i + 1; j < nums.length; j++){
        if(numberToCheck === nums[j]){
          occurances++
          nums.splice(j, 1)
          j--
        }
      }
      if(occurances > highestOccurances){
        highestOccurances = occurances
        majorityNumber = numberToCheck
      }
    }
    return majorityNumber
};