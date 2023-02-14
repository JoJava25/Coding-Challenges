function f(x,y,z){
    let total = 0;
    while (Math.min(x,y,z) > 0) {
      total += x * y * z;
      x--; y--; z--;
    }
    return total;
  }