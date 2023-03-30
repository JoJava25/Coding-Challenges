function add(...num) {
    let count = 1; 
    let res = 0
    num.map((el, i) => {
      res += el / count
      count++
  
    })
     return Math.round(res)
  }
   