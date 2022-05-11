function oddOrEven(n) {
    if(n % 2 > 0){
       return "Either"
    }else if((n/2) % 2 !== 0){
      return "Odd"
    }else{
      return "Even"
    }
  }