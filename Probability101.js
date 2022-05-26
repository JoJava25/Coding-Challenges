function probability(length, num) {
    const lower = length > 1 ? 10 ** (length - 1) : 0;
    const upper = (10 ** length) - 1;
    const howManyPossibleNumbers = upper - lower + 1;
  
    const greatestMultiple = Math.floor(upper / num);
    const lowestMultiple = Math.ceil(lower / num);
    const howManyMultiples = Math.max(greatestMultiple - lowestMultiple + 1, 0);
    
    return howManyMultiples / howManyPossibleNumbers * 100;
  }