function makeChocolates(small, big, goal) {
    for (let b = big; b >= 0; b--){
      for (let s = small; s >= 0; s--){
        if ((b*5 + s*2) === goal) return s;
      }
    }
    return -1;
  }