function titleToNumber(title) {
    for (var n = 0, i = 0; i < title.length; i++) {
      n = 26 * n + title.charCodeAt(i) - 64
    }
    return n
  }