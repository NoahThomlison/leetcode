
/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  nums.sort()
  let count = 0
  let highestCount = 0
  let mostCommon = nums[0]
  console.log(nums)
  for(let i = 0; i < nums.length; i++){
    if(nums[i] === nums[i+1]){
       count++
       if(count > highestCount){
        highestCount = count
        mostCommon = nums[i]
      }
    }
    else{
      count = 0
    }
  }
  return(mostCommon)
};