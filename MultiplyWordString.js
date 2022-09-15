function modifyMultiply (str,loc,num) {
    let arr = str.split(' ')
    let res = []
    let strres =  ""
    for (i =0; i<num; i++){
     res.push(arr[loc]);
     strres = res.join('-');
    }
    return strres
  } 