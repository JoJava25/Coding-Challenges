function maxIntChain(n) {
    if (n < 5) return -1
    let f = Math.floor(n/2)
    let f2 = f+1
    if (n%2 === 0) f--
    return f*f2
  }