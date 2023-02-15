function pairZeros(arr) {
    let dbl = 0, out = [];
    
    for ( let i of arr ){
      if ( i === 0 ){
        dbl += 1;
        if ( dbl === 2 ){
          dbl = 0;
          continue
        }else{
          out.push(i);
        }
      }else{
          out.push(i);
      }
    }
    return out
  }