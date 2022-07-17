function gps(s, x) {
    return Math.max(...x.slice(1).map((a, i) => (a - x[i]) / s * 3600)) | 0
  }