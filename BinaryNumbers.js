function solution(n, b) {
    if (b === 0)
      return []
    const numbers = []
    let x = b
    while (x < 2 ** n) {
      numbers.push(x)
      x = (x + 1) | b
    }
    return numbers
  }