/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  let duplicatedFound = false
  nums.sort()
  for(let i = 0; i < nums.length; i++){
    if(nums[i] === nums[i+1]){
      duplicatedFound = true
      break
    }
  }    
  return(duplicatedFound)
};