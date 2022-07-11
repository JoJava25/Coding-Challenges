function redistributeWealth(wealth) {
    wealth = wealth.fill((wealth.reduce(function(a, b) {
      return a + b;})) / wealth.length);
  }