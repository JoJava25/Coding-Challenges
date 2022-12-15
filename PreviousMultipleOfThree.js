const prevMultOfThree = n => {
    n = n.toString()
    
    while(+n % 3 != 0) {
      n = n.slice(0, n.length-1)
    }
    
    return n.length == 0 ? null : +n
  }