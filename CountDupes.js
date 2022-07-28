function duplicateCount(text){
    let freq = {}
    let count = 0
    for(let i = 0; i < text.length; i++){
      let character = text.charAt(i).toLowerCase()
      if(freq[character] === 1){
        count++
        freq[character]++
        }else if(! freq[character]){
          freq[character] = 1
        }
    }
    return count
  }