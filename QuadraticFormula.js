function quadraticFormula(a, b, c) {
    let m = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)
    let n = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a)
    return [m, n]
  }