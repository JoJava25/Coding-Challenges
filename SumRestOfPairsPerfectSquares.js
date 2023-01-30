const closestPairTonum = (n) => {
    const isSquare = (x) => Math.sqrt(x) % 1 === 0
    for (let i = n - 1; i > 1; i--) {
      for (let j = i - 1; j > 0; j--) {
        if (isSquare(i + j) && isSquare(i - j)) return [i, j]
      }
    }
  }