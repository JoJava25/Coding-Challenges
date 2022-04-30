function arrAdder(arr) {
    let words = []
    for(let i = 0; i < arr[0].length; i++){
      for(let x = 0; x < arr.length; x++){
        words.push(arr[x][i])
      }
      words.push(' ')
    }
    return words.join('').replace(/\s+/g, ' ').trim()
  }