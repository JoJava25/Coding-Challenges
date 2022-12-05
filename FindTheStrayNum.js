function stray(numbers) {
    let same = 0
    if(numbers[0] === numbers[1] || numbers[0] === numbers[2]){
      same = numbers[0]
    }else if(numbers[1] === numbers[2]){
      same = numbers[1]
    }
    for(let i = 0; i <= numbers.length; i++){
      if(numbers[i] !== same){
        return numbers[i]
      }
    }
  }