function minSum(arr) {
    let sortArr = arr.sort((a,b) => a-b)
    let sum = 0
      while(sortArr.length){
      sum += sortArr.shift() * sortArr.pop()
  }
    return sum
  }