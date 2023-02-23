function indexOf(head, value) {
    var node = head
    var i = 0
    while (node!=null) {
      if (node.data==value && typeof(node.data)==typeof(value)) return i;
      node = node.next;
      i++
    }
    return -1
  }