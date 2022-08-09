/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if(t.length !== s.length){
    return false
  }
  t = t.split("")
  for(let i = 0; i <= s.length; i++){
    let index = t.indexOf(s[i])
    if(index > -1){
      t.splice(index, 1)
    }
  }
  return(t.length === 0 ? true : false)
};