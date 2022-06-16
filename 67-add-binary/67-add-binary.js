/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
  let aBinary = `0b${a}`
  let bBinary = `0b${b}`
  const sum = BigInt(aBinary) + BigInt(bBinary)
  return sum.toString(2)
};