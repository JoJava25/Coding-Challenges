function mostFrequentItemCount(collection) {
    const count = {}
    let max = 0
  
    for (const item of collection) {
      count[item] = count[item] + 1 || 1
    }
    for (const item in count) {
      if (count[item] > max) {
        max = count[item]
      }
    }
    return max
  }