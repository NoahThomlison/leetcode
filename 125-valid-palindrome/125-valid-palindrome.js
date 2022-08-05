/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let lowS = s.replace(/[\W_]+/g,"").toLowerCase()
    reverseS = lowS.split("").reverse().toString().replaceAll(",", "")
    return(reverseS == lowS ? true : false)
};
