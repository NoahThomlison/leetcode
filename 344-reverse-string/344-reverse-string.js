/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
  let t = s.length - 1
  for(let i = 0; i < s.length/2 ; i++){
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
