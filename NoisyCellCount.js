function cleanedCounts(data) {
    let arr = [...data];
    
    for(let i = 1; i < data.length; i++) {
      if(arr[i] < arr[i-1]) {
        arr[i] = arr[i-1];
      }
    }
    
    return arr;
  }