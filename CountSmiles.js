function countSmileys(arr) {
    let smiles = 0
    arr = arr.join('')
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === ":" || arr[i] === ";"){
        if(arr[i+1] === "-" || arr[i+1] === "~"){
          if(arr[i + 2] === ")" || arr[i+2] === "D"){
            smiles++
          }
        }else if(arr[i+1] === ")" || arr[i+1] === "D"){
          smiles++
        }
      }
    }
    return smiles
  }