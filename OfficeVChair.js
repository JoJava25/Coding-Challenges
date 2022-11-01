function meeting(x, need){
  
    let borrow = []
    
    if (!need) 
      return 'Game On'
      
    for (let [ used, chairs ] of x) {
      chairs = Math.min(need, Math.max(0, chairs - used.length))
      borrow.push(chairs)
      need -= chairs
      
      if (!need)
        return borrow
    }
    
    return 'Not enough!'
    
  }