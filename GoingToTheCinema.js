function movie(card, ticket, perc) {
    let a = 0,
        b = card,
        trips = 0
    
    while (Math.ceil(a) <= Math.ceil(b)) {
      ++trips
      b += ticket * Math.pow(perc, trips)
      a += ticket
    }
    
    return trips
  }