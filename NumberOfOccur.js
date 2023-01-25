Array.prototype.numberOfOccurrences = function(f) {
    return this.filter(i => i === f).length
  }