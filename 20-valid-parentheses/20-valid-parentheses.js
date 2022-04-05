/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let string = s.split("")
    let goodString = true
    let closingRegularBrackets = 0
    let closingSquareBrackets = 0
    let closingCurlyBrackets = 0
    let length = 0
    while(string.length > 0){
      length = string.length

      closingRegularBrackets = string.indexOf( ")")
      if(string[closingRegularBrackets-1] == "("){
        string.splice(closingRegularBrackets-1, 2)
      }

      closingSquareBrackets = string.indexOf( "]")
      if(string[closingSquareBrackets-1] == "["){
        string.splice(closingSquareBrackets-1, 2)
      }

      closingCurlyBrackets = string.indexOf( "}")
      if(string[closingCurlyBrackets-1] == "{"){
        string.splice(closingCurlyBrackets-1, 2)
      }

      if(string.length === length){
        goodString = false
        break
      }
  }
  return(goodString)
};
