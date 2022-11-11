function solution(a) {
    let i = 0
    let count = 0
    while(i < a.length && i >= 0){
      i += a[i]
      count ++
      if(count > 10)
        return -1
    }
    return count
  }