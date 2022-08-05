// return((highestProfit > 0 ? highestProfit : 0))
// };

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let buyPrice = prices[0]
  let profit = 0

  for(let i = 0; i < prices.length ; i++){
    let tempProfit = prices[i+1] - prices[i]
    if(tempProfit > 0){
      if(prices[i] < buyPrice){
        buyPrice = prices[i]
      }
      if(prices[i+1]-buyPrice > profit){
        profit = prices[i+1] - buyPrice
      }
    }
  }
return(profit)
};