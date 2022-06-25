function toCamelCase(str){
    let result = str.split('')
    for(let i = 0; i < result.length;i++){
      if(result[i] === '-' || result[i] === '_'){
        result[i+1] = result[i+1].toUpperCase()
        result.splice(i, 1)
        i--
      }
    }
    return result.join('')
  }