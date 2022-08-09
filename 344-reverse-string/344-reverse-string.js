/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
  let t = s.length - 1
  let times
  (s%2 === 0 ? times = s.length/2+1 : times = s.length/2 - 1)
  console.log(times)
  for(let i = 0; i <= times  ; i++){
    console.log(s[i])
    let temp = s[i]
    if(s[i] === s[t]){
      t--
      continue
    }
    s[i] = s[t]
    s[t] = temp
    t--
  }
  return(s)
};
