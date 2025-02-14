function consecutive(arr, a, b) {
    const arrA = arr.indexOf(a)
    const arrB = arr.indexOf(b)
    
    if(arrA + 1 == arrB || arrB + 1 == arrA){
      return true
    }else{
      return false
    }
  }