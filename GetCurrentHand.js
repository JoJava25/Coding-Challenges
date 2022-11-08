function getCurrentHand(arr) {
    const knownHand = []
    const playedQueue = []
    for (const card of arr) {
      const knownHandIndex = knownHand.indexOf(card)
      if (knownHandIndex !== -1) {
        knownHand.splice(knownHandIndex, 1)
      } 
      playedQueue.push(card)
      if (playedQueue.length > 4) {
        knownHand.push(playedQueue.shift())        
      }
    }
    return knownHand
  }