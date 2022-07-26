function spinWords(string){
    let arr = string.split(" ")
    let result = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i].split('').length > 4){
       result.push(arr[i].split("").reverse().join(""))
      }else{
        result.push(arr[i])
      }
    }
    return result.join(' ')
  }
  