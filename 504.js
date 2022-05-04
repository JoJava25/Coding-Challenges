function maskify(cc) {
    let result = cc.split('')
    for(let i = 0; i < result.length - 4; i++){
      result[i] = "#"
    }
    return result.join('')
  }
  