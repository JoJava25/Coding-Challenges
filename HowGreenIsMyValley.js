function makeValley(arr) {
    arr.sort((a, b)=> b - a )
    const arr1 = [], arr2 = []
    
    for ( let i = 0; i < arr.length; i++ ){
      if ( i % 2 ){
        arr2.push(arr[i])
      } else {
        arr1.unshift(arr[i])
      }
    }
    
    return (arr2.concat(arr1)).reverse()
  }