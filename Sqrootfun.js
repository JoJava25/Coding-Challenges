function squareIt(int) {
    let n = Math.sqrt(int.toString().length);
    
    if(n !== Math.floor(n)){
      return 'Not a perfect square!'
    } else {
      return int.toString().split('').map((e,i) => (i+1) % n === 0 && i !== (n**2) - 1 ? `${e}\n` : e).join('');
    }
  }