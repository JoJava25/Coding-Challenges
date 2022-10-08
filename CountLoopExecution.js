function countLoopIterations(arr){
    let result = [],
        product = 1
    for (let [number,boolean] of arr) {
      let count = number + 1 + boolean
      result.push(count * product)
      product *= count - 1
    }
    return result
  }