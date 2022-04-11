/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
   let k = 0
   for(let i = 0; i < nums.length; i++){
    //  console.log(nums[i])
     if(nums[i] === val){
       k += 1
      for(let j = i; j < nums.length; j++){
         nums[j] = nums[j+1]
        }
        i -= 1
       }
     }
    //  console.log(nums)
     return(nums.length - k)
};
