function pell(n) {
    // your smart code here
    let pells = []
    
    for (let i = 0; pells.length <= n ; i++) {
      if (pells.length <= 2) {
        pells.push(i)
      } else {
        let var1 = BigInt(pells[i-1])
        let var2 = BigInt(pells[i-2])
        pells.push( ((var1 + var1) + var2) ) 
      }    
    }
  
    
    return pells[n]
  }