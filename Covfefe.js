function covfefe(str){
    if (str.match(/coverage/g) === null) return str + " covfefe";
    return str.replace(/coverage/g, "covfefe");
  }