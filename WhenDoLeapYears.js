function isLeapYear(duration, year) {
    let fraction = duration % Math.floor(duration);
    let cycle = 1 / fraction;
    
    return year % cycle === 0 ? true: false;
  }