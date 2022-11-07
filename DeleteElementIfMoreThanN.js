function deleteNth(arr,x){
    let obj = {}
    return arr.filter(function(n){
      obj[n] = obj[n] ? obj[n] + 1 : 1
      return obj[n] <= x
    })
  }