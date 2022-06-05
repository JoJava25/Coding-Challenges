function interest(P,r,n) {
    return [P*(1 + r*n), P*Math.pow(1+r, n)].map(Math.round)
  }