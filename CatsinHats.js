function height(n) {
    let currentCat = 2000000,totalHeight  = 2000000
    for (let i = 0; i < n; i++) {
      currentCat = currentCat / 2.5
      totalHeight += currentCat
    }
    return totalHeight.toFixed(3)
  }