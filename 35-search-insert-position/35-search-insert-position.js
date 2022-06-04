/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let index = 0
  let offset = 0
  if(nums.indexOf(target) !== -1){
    return(nums.indexOf(target))
  }
  
  let newArray = nums
  while(newArray.length !== 1){    
  midPointValue = newArray[Math.floor((newArray.length)/2)]
    if(target < midPointValue){
      newArray = newArray.slice(0, newArray.indexOf(midPointValue))
      }
    else{
      newArray = newArray.slice(newArray.indexOf(midPointValue), newArray.length)
    }
  }

  if(target > newArray[0]){
    offset = 1
  }
  if(target < newArray[0]){
    offset = -1
  }

  index = nums.indexOf(newArray[0]) + offset
  if(index < 0){
    index = 0
  }
  return(index)
};