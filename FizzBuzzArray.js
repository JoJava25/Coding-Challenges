function solution(number){
    let both = 0
    let five = 0
    let three = 0
    
    for(let x = 1; x < number; x++){
      if(x % 3 == 0 && x % 5 == 0){
        both++
      }else if(x % 3 == 0){
        three++
      }else if(x % 5 == 0){
        five++
      }
    }
    return [three, five, both]
  }