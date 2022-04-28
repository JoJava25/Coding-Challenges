function unusedDigits(...arr) {
    let digits = arr.join('')
    
    let allD = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const result = allD.filter(x => !digits.includes(x))
    return result.join('')
  }