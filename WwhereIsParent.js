function findChildren(dancingBrigade){
    char = "";
    let arr = dancingBrigade.toLowerCase().split("").sort().map(item => {
      if(item != char) {
        char = item;
        return item.toUpperCase();
      }
      return item;
    }).join("");
  
    return arr;
  }