function flyBy(lamps, drone){
    let flight = drone.split('').indexOf('T')
    let lamparr = lamps.split('')
    for(let i = 0; i <= flight; i++){
      if(i <= lamps.length - 1){
        lamparr[i] = 'o'
      }
    }
    return lamparr.join('')
  }