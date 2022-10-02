function reverseList(arr) {
    let res = [];
    for(let e of arr) {
      res.unshift(e);
    }
    return res;
  }