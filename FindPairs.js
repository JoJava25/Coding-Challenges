function duplicates(array){
    if(array.length < 2){
      return 0
    }
    let pairs = 0
    const counts = []
    array.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; })
    for(let i = 0; i < counts.length; i++){
      if(counts[i] > 1){
        pairs += Math.floor(counts[i] / 2)
      }
    }
    return pairs
  }