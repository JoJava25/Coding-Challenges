function getDivisorsCnt(n) {
    var cnt = 1;
    for (var i = 0; i <= n / 2; ++i)
      if (n % i == 0)
        ++cnt;
    return cnt;
  }