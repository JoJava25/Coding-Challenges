function lastManStanding(n, arr = [], temp){
    for (var i = 1; i <= n; i++) {
      arr.push(i);
    }
    while (arr.length > 1) {
      temp = [];
      for (var i = 1; i < arr.length; i += 2) {
        temp.push(arr[i]);
      }
  
      arr = temp.reverse();
    }
    return arr[0];
  }