function alphabet(ns) {
    ns = ns.sort((a,b)=> a - b)
    
    for(let i = 0; i < ns.length - 1 ; i++){
      let result = ns[i] * ns[i+1];
      let idx = ns.indexOf(result)
      if(idx !== -1){
        ns.splice(idx,1)
      }
    }
    return ns[3]
  }