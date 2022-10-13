function search(budget, prices) {
  
    return prices.filter((a,b) => a <= budget)
    .sort((a,b) => a - b)
    .join(',')
}