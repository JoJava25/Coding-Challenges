function cupAndBalls(b, arr){
    if(arr === []){
      return b
    }
  
    for(let i = 0; i < arr.length; i++){
     if(b === arr[i][0]){
       b = arr[i][1]
       }else if(b === arr[i][1]){
         b = arr[i][0]
      }
    }
    return b
  }