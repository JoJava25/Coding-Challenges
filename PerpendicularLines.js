function maxBisectors(n) {
    let a = ~~(n / 2);
    return Math.pow(a, 2) + (n % 2 !== 0 ? a : 0)
  }