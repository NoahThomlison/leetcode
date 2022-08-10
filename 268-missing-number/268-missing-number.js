/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
  nums.sort(function(a, b) {
    return a - b;
  });
  
  if(nums[0] !== 0){
      return(0)
    }
    let lastNumber = nums[0]
    let missingNum
    for(let i = 1 ; i <= nums.length ; i++){
      if(nums[i] - 1 !== lastNumber){
        missingNum = nums[i] - 1
        break
      }
      else{
        lastNumber = nums[i]
      }
    }
    if(!missingNum){
      missingNum = nums.length
    }
    return(missingNum)
};
