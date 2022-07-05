function presses(phrase) {
    var keys = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0'];
    var letters = phrase.toUpperCase().split(''), count = 0;
    letters.forEach((l) => keys.forEach((k) => count += 1 + k.indexOf(l)));
    return count;
  }