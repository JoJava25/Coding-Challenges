function mergeStrings(first, second){
    let count = 0;
    
    for (let i = 0; i < first.length; i++) {
      if (first[i] == second[count]) {
        count++;
      } else {
        count = 0;
        if (first[i] == second[count]) count++;
      }
    }
  
    return first + second.slice(count);
  }