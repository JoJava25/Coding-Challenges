function stantonMeasure(arr){
    let count1 = 0
    let countn = 0
     for(let i = 0; i < arr.length; i++){
        if(arr[i] === 1){
          count1++
        }
     }
      for(let i = 0; i < arr.length; i++){
        if(arr[i] === count1){
          countn++
        }
     }
        return countn
  }