function spoonerize(words) {
    let arr = words.split(' '),
        sub1 = arr[0].substr(0,1),
        sub2 = arr[1].substr(0,1);
  
    return arr[0].replace(sub1, sub2) + ' ' + arr[1].replace(sub2, sub1);
  }