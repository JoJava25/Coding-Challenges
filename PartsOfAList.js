function partlist(arr) {
    let res = [];
    for(i=1;i<arr.length;i++){
      let subres = [];
      subres.push(arr.slice(0,i).join(' '));
      subres.push(arr.slice(i).join(' '))
      res.push(subres);
    }
    return res;
}