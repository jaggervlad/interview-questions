const maxProfit = function (prices) {
  if (!prices || prices.length < 2) return 0;

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);

    const potentialProfit = prices[i] - minPrice;

    maxProfit = Math.max(potentialProfit, maxProfit);
  }

  return maxProfit;
};

// Ejemplo de uso
const prices = [7, 1, 5, 3, 6, 4];
const result = maxProfit(prices);
console.log('Max Profit:', result);
