function smallEnough(arr, limit){
    let result = true
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > limit)
        result = false
      }
    return result
  }