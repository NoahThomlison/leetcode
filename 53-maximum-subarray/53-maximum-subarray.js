function maxSubArray(arr) { 
  let max_so_far = -Infinity
  let max_ending_here = 0
    
  for (let i = 0; i < arr.length; i++)
  {
      max_ending_here += arr[i]
      if (max_so_far < max_ending_here)
          max_so_far = max_ending_here

      if (max_ending_here < 0)
          max_ending_here = 0
  }
  return max_so_far;
}