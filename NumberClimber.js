function climb(n) {
    return n == 1 ? [1] : climb(n >> 1).concat([n]);
  }