function duplicateEncode(word){
    const counts = {}
    let wordarr = word.toLowerCase().split('')
    for (const num of wordarr) {
      counts[num] = counts[num] ? counts[num] + 1 : 1
    } 
  
    return wordarr.map((a,b) => {
      for (const property in counts){
        if (a === property){
          return (counts[property] === 1 ? "(" : ")" )
        }
      }
    }).join('')
    
  }
  