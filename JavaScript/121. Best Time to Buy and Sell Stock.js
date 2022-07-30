/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let currentMin = 1000000;
  let ans = 0;
  for (let i = 0; i < prices.length; i++) {
    ans = Math.max(ans, prices[i] - currentMin);
    currentMin = Math.min(currentMin, prices[i]);
  }
  return ans;
};
