/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let numbers = []
  for (let number of nums){
      let complimentNumber = target-number
      if(nums.lastIndexOf(complimentNumber) > 0 && nums.lastIndexOf(complimentNumber) !== nums.indexOf(number)){
          numbers[0] = nums.indexOf(number)
          numbers[1] = nums.lastIndexOf(complimentNumber)
          break
      }
  };
  return(numbers)
}
