var FindFunction = function(func, arr) {
    return arr.filter(func.filter((c) => typeof c === 'function')[0]);
  }