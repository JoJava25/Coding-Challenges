function last (words) {
    return words.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)))
  }