function trim(arr, size) {
    if(arr.length <= size) return arr
    if(size > 3) size -= 3
    return arr.substr(0, size) + "..."
  }