function whichBusToTake(busesColors, goingToSchool) {
    for (const i in busesColors) {
      if (busesColors[i] === 'red' && goingToSchool[i]) {
        return ~~i
      }
    }
  
    for (const i in busesColors) {
      if (busesColors[i] === 'blue' && goingToSchool[i]) {
        return ~~i
      }
    }
  }