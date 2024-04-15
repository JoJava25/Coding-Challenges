function histogram(results) {
    let histogram = ''
    
    for (let i=5; i>=0; --i)
      histogram += (i+1) + '|' + '#'.repeat(results[i]) + (results[i] > 0 ? ' ' + results[i] : '') + "\n"
    
    return histogram
  }