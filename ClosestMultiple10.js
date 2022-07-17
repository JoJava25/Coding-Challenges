const closestMultiple10 = num => {
    let b = num % 10
    if (b < 5) {
      num -= b
    } else {
      num += 10 - b
    }
    return num
  };