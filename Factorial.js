function factorial(n){
    let answer = 1;
    
    while (n > 0) {
      answer *= n;
      n--;
    }
    
    return answer;
  }