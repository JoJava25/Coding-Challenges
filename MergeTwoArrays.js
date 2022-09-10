function mergeArrays(a, b) {
    let i = 0
    let arr = []
    while(i < a.length || i < b.length){
      if(i < a.length){
        arr.push(a[i])
      }
      if(i < b.length){
        arr.push(b[i])
      }
      i++
    }
    return arr
  }