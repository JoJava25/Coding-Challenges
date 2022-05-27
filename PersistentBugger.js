function persistence(num) {
    let count = 0
     if(num.toString().length === 1){
       return count
     }
    while(num.toString().length > 1){
      count ++
      num = num.toString().split('').reduce((a,b) => Number(a) * Number(b), 1)
    }
    return count
  }