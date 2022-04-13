var plusOne = function(digits) {
  let singleNumber = BigInt(digits.join(''));
  singleNumber += BigInt(1)
  digits = [...singleNumber+''].map(n=>+n)
  return(digits)
}