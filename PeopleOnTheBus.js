let number = function(busStops){
    let count = 0
    for(let i = 0; i < busStops.length; i++){
        count += busStops[i][0] - busStops[i][1]
      if(count < 0)
        count = 0
    }
      return count
  }