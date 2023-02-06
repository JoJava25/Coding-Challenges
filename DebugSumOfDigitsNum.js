function getSumOfDigits(integer) {
    var sum = 0
    let arr = Array.from(String(integer), Number)
    for(let i = 0; i <= arr.length - 1; i++){
      sum += arr[i]
    }
    return sum;
  }