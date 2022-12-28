let comparator = function(a,b) {
    if (b[0] === 'O' || a[0] === 'a') return 1
    if (a[0] === 'O' || b[0] === 'a') return -1
    return Number.parseInt(a) < Number.parseInt(b) ? 1 : -1
  }