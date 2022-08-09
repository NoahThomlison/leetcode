/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if(t.length !== s.length){
    return false
  }
  
  s = s.split("").sort()
  t = t.split("").sort()

  let same = true
  s.forEach((letter, index) => {
    if(t[index] !== letter){same = false}
  });

  return(same)
};
