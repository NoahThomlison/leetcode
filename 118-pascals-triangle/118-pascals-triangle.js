/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let triangle = [[1]]
    for(let i = 1; i < numRows; i++){
      let currentRow = []
      currentRow[0] = 1
      for(let j = 1; j < (i + 1); j++){
        currentRow[j] = triangle[i-1][j-1] + triangle[i-1][j]
      }
      currentRow[0] = 1
      currentRow[triangle[i-1].length] = 1
      triangle.push(currentRow)

    }
    return(triangle)
};
