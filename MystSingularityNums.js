function realNumbers(m, n=BigInt(m)) {
    return Number(n - n/2n - n/3n - n/5n + n/6n + n/10n + n/15n - n/30n);
  }