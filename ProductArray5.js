function productArray(numbers){
    let result = []
    if(numbers.length > 2){
      for(let i = 0; i < numbers.length; i++){
          let current = numbers.splice(i, 1)
          result.push(numbers.reduce((a,b) => a * b))
          numbers.splice(i, 0 , current)
      }
    }else{
      result.push(numbers[1], numbers[0])
    }
    return result
  }