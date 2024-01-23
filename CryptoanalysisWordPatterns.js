function wordPattern(word) {
    let read = {}
    let count = 0
    const pattern = word.split('').map(char => {
      char = char.toLowerCase()
      if (read.hasOwnProperty(char)) {
        return read[char]
      }
      read[char] = count
      let newCount = count
      count++
      return newCount
    })
    return pattern.join('.'); 
  }