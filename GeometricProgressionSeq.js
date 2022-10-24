function geometricSequenceElements(a, r, n){
    let result = [a]
    for(let i = 1; i < n; i++){
      a = a * r
      result.push(a)
    }
    return result.join(', ')
  }