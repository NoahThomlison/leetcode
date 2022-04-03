/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {

  let number = s.replace(/IV/g, ",IV,").split(",")
  number = String(number).replace(/IV/g, 4)

  number = number.replace(/IX/g, ",IX,").split(",")
  number = String(number).replace(/IX/g, 9)

  number = number.replace(/XL/g, ",XL,").split(",")
  number = String(number).replace(/XL/g, 40)

  number = number.replace(/XC/g, ",XC,").split(",")
  number = String(number).replace(/XC/g, 90)

  number = number.replace(/CD/g, ",CD,").split(",")
  number = String(number).replace(/CD/g, 400)

  number = number.replace(/CM/g, ",CM,").split(",")
  number = String(number).replace(/CM/g, 900)
  console.log(number)

  number = number.replace(/I/g, ",I,").split(",")
  console.log(number)

  number = String(number).replace(/I/g, 1)
  console.log(number)

  number = number.replace(/V/g, ",V,").split(",")
  number = String(number).replace(/V/g, 5)

  number = number.replace(/X/g, ",X,").split(",")
  number = String(number).replace(/X/g, 10)

  number = number.replace(/L/g, ",L,").split(",")
  number = String(number).replace(/L/g, 50)

  number = number.replace(/C/g, ",C,").split(",")
  number = String(number).replace(/C/g, 100)

  number = number.replace(/D/g, ",D,").split(",")
  number = String(number).replace(/D/g, 500)

  number = number.replace(/M/g, ",M,").split(",")
  number = String(number).replace(/M/g, 1000)
  number = number.split(",")
  let answer = 0
  console.log(number)
  number.forEach((character)=> {
    if(parseInt(character)){
      answer += parseInt(character)
    }
  })
  
  return(answer)
};
