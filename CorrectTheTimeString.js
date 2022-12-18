function timeCorrect( times ) {
    if ( times === null || !times ) return times === null ? null : ''
    
    const arr = times.split(':').map(Number).reverse();
    let [add1, add2] = [0, 0];
    for ( let i = 0; i < 3; i++ ){
          add2 = add1
      if( i < 2 ){
        add1 = Math.floor((arr[i] + add2)/60)
              arr[i] = (arr[i] + add2) % 60;
      }else{
        arr[i] = (arr[i] + add2) % 24
      }
    }
    return arr.join('').includes('NaN') ? null : arr.reverse().map(el=> el < 10 ? '0'+el : el).join(':')
  }