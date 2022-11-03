function shorter_reverse_longer(a,b){
    if(b.length > a.length){
      return shorter_reverse_longer(b,a);
    }
    function reverse(r) {
      return r.split('').reverse().join('');
    }
    
    return b+reverse(a)+b;
  }