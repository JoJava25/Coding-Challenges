function londonCityHacker(trip) {
    let typeList = trip.map(journey => typeof journey)
    console.log(typeList)
    
    let fare = 0
    let busCount = 0
    for(type of typeList) {
      if(type === 'string') {
        fare += 2.40
        busCount = 0
      } else if(type === 'number' && busCount === 0) {
        fare += 1.50
        busCount++
      } else {
        busCount = 0
      }
      console.log(type)
      console.log(fare)
    }
    return('£' + fare.toFixed(2))
  }