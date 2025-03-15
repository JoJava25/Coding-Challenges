function padovan(n) {
    let P = [1, 1, 1];
    for(i = 3; i <= n; i++) {
      P.push(P[i-2] + P[i-3]);
    }
    return P[n];
  }