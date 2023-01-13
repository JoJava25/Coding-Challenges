function cyclops(n) {
    let binary = n.toString(2).split('0')
    return  binary.length == 2 &&  binary[0] == binary[1]
  }
  