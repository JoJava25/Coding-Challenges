function isIsogram(str){
    const counts = {}
    let arr = str.toLowerCase().split('')
    for (const num of arr) {
      counts[num] = counts[num] ? counts[num] + 1 : 1
      
      if(counts[num] > 1){
        return false
      }
    }
    return true
  }