find_the_ball=function(start,swaps){
    let result = start
    if(swaps === []){
      return result
    }
    
    swaps.forEach((a, b) => {
        if(swaps[b][0] === result){
          result = swaps[b][1]
        }else if(swaps[b][1] === result){
          result = swaps[b][0]
        }
    })
    return result
  }