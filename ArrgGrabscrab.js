function grabscrab(anagram, dictionary) {
    anagram=anagram.split('').sort().join('');
    return dictionary.filter(a=>a.split('').sort().join('')===anagram)
  }