function sumFromString(str) {

    var arr = str.split(/\D/g);
    var res = 0;
    
    for(var i = 0; i < arr.length; i++){
      res += +arr[i];
    }
    
    return res;
  }