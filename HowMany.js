function checkNum (num,d){
    let arr = [...num+''].map(Number);
    return arr.slice(1).every((x,i)=>{
      return x-arr[i]<=d && x-arr[i] > 0
    })
  }
  
  function selNumber(n, d) {
    let result = [];
    for(let i=12;i<=n;i++){
      if(checkNum(i,d))result.push(i)
    }
    return result.length
  }