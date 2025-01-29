function solution(str, ending){
  
    let size = ending.length
    const test = str.split('').splice(str.length - size, size).join('')
    if(test === ending){
      return true
    }else{
      return false
    }
    
  }