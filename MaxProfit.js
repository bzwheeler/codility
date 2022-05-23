function solution(a) {
  let maxProfit = 0;
  let buyPrice = a[0] || 0;
  let sellPrice = a[0] || 0;
  for(let i = 1; i < a.length; i++) {
    if (a[i] < buyPrice) {
      profit = sellPrice - buyPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      } 
      buyPrice = a[i];
      sellPrice = a[i];
    }
    if (a[i] > sellPrice) {
      sellPrice = a[i];
    }
  }
  return Math.max(maxProfit, sellPrice - buyPrice);
}
