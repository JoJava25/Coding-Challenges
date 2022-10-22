function howManyGifts(maxBudget, gifts){
    gifts = gifts.sort((a,b) => a - b)
    
    let giftsTobuy = []
    let sumOfGifts = 0;
    
    for (let i = 0; i < gifts.length; i++) {  
      if ((sumOfGifts += gifts[i]) <= maxBudget) {   
        giftsTobuy.push(gifts[i])
      }
    }
  
    return giftsTobuy.length
  }