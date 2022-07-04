function wave(str){
    let result = []
    let arr = str.split('')
    for(let i = 0; i < arr.length; i++){
      if(arr[i] !== ' '){
        arr[i] = arr[i].toUpperCase()
        result.push(arr.join(''))
        arr[i] = arr[i].toLowerCase()
      }
    }
    return result
  }