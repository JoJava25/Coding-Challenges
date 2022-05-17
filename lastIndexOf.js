function lastIndexOf(head, value) {
    let i = 0, found = -1;
    while (head) {
      if (value === head.data) found = i;
      i++;
      head = head.next;
    }
    return found;
  }