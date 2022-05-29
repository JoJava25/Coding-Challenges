function shortestStepsToNum(num) {
    // work backwards. unless you're not trying
    var ticks = 0;
    while (num > 1)
      num % 2 == 0 ? num /= 2 : num--, ticks++;
    return ticks
  }