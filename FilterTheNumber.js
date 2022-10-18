var filterString = function(value) {
    let arr = value.split('')
    let num = []
    for(let i = 0; i < arr.length; i++){
      if(isNaN(arr[i]) === false){
        num.push(arr[i])
      }
    }
    return +num.join('')
  }