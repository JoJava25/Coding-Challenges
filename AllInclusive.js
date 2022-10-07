function containAllRots( $, arr ) {
    arr = arr.map(e => e.toLowerCase());
    const arr$ = Array.from({length: $.length}, x => $.toLowerCase())
        .map((el, i)=> el.slice(i)+el.slice(0,i))
    return arr$.every(e => arr.includes(e))
  }