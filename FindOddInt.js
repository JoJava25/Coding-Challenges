function findOdd(A) {
    let freq = {}
      for(let i = 0; i < A.length; i++){
        let num = A[i]
        if(freq[num]){
          freq[num]++
          }else if(! freq[num]){
            freq[num] = 1
          }
      }
      
      for (const property in freq){
        if(freq[property] % 2 !== 0){
          return Number(property)
        }
      }
    }