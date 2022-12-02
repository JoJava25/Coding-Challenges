function lastSurvivor(letters, coords) {
    let result = letters.split('')
    for (let i of coords) {
        result.splice(i, 1)
    }
    
    return result.join('')
  }