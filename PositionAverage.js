function posAverage(s) {
    
    let matches = 0;
    const substrings = s.split(', ');
    const subLength = substrings[0].length;
    const numPositions = subLength * (substrings.length * (substrings.length - 1)) / 2;
    
    for (let i = 0; i < substrings.length; i++) {
      for (let j = i+1; j < substrings.length; j++) {
        for (let k=0; k<subLength; k++) {
          matches += substrings[i][k] === substrings[j][k]
        } 
      }
    }
    
    return 100 * (matches / numPositions);
}