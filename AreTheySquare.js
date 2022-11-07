var isSquare = function(arr){
    for (var i = 0; i < arr.length; i++) {
      if(!Number.isInteger(Math.sqrt(arr[i]))) {
        return false;
      }
    }
  
    return arr.length ? true : undefined;
  }