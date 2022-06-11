const robberEncode = sentence =>
     sentence.split('').map(c => 
        /[b-df-hj-np-tv-z]/.test(c) ? c + 'o' + c 
      : /[B-DF-HJ-NP-TV-Z]/.test(c) ? c + 'O' + c
      : c ).join('');