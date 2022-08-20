String.prototype.capitalize = function () {
    let c = this.charCodeAt(0)
    if (97 <= c && c <= 122) c -= 32
    
    return String.fromCharCode(c) + this.slice(1)
  }