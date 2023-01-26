function snail(column, day, night) {
    let result = 0
    let distance = 0
    
    while(distance < column){
      distance += day
      if(distance < column){
        distance -= night
      }
      result++
    }
    return result
  }