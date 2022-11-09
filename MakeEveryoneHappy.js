function smile(text) {
    let arr = text.split('')
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === ":" || arr[i] === ";" || arr[i] === "="){
        if(arr[i+1] === "-" || arr[i+1] === "~"){
          if(arr[i+2] === "(" ){
            arr[i+2] = ")"
          }else if(arr[i+2] === "[" ){
            arr[i+2] = "]"
          }
        }else if(arr[i+1] === "(" ){
          arr[i+1] = ")"
        }else if(arr[i+1] === "[" ){
          arr[i+1] = "]"
        }
      }
    }
    return arr.join('')
  }