function squares(x, n) {
    let arr = []
    if(n === 0 || n < 0) return arr;
    for(let i = x; arr.length < n; i*=i) {
        arr.push(i)
    }
    return arr
  }