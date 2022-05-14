function solve(s){
    let test = s.split('')
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    let upper = 0
    let lower = 0
    let num = 0
    let spec = 0
    for(let i = 0; i < test.length; i++){
      if(isNaN(test[i]) == false){
        num++
      }else if(specialChars.test(test[i])){
        spec++
      }else if(test[i] === test[i].toUpperCase()){
        upper++
      }else if(test[i] === test[i].toLowerCase()){
        lower++
      }
    }
    return [upper, lower, num, spec]
  }