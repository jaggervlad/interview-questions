/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfitV2 = function (prices) {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // If the price on the current day is higher than the previous day, make a transaction
    if (prices[i] > prices[i - 1]) {
      // Add the profit to maxProfit
      maxProfit += prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
};
