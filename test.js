/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    let triangle = []
    let currentRow = [1, 1]
    if(rowIndex === 0){
        return([0])
    }

    for(let i = 1; i <= rowIndex; i++){
    // console.log(currentRow)
    console.log(i)

    for(let x = 0; x <= currentRow.length + 1; x++){
        console.log(x)
        if(x === 0 || currentRow[x+1] === undefined){
            triangle[x] = 1
            continue
        }
        triangle[x] = currentRow[x+1] + currentRow[x]
    }
    console.log(triangle)
    // currentRow = triangle

    }
    return(triangle)
};

// let rowIndex = 2
// console.log(getRow(rowIndex))
// // Output: [1,3,3,1]

rowIndex = 3
console.log(getRow(rowIndex))