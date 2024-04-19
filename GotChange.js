function giveChange(amount) {
    let bills = [0,0,0,0,0,0]
    
    while(amount > 0){
      if(amount >= 100){
        amount = amount - 100
        bills[5] += 1
      }else if(amount >= 50){
        amount = amount - 50
        bills[4] += 1
      }else if(amount >= 20){
        amount = amount - 20
        bills[3] += 1
      }else if(amount >= 10){
        amount = amount - 10
        bills[2] += 1
      }else if(amount >= 5){
        amount = amount - 5
        bills[1] += 1
      }else if(amount >= 1){
        amount = amount - 1
        bills[0] += 1
      }
    }
  return bills
  }