const condense = (str) =>{
    str = str.split(" ")
    
    for (let i = 0; i < str.length - 1; i++){
      for (let j = 0; j < str[i].length; j++){  
        if (str[i + 1].startsWith(str[i].slice(j))){
          str[i] = str[i].substring(0,j)  
        }
      }
    }
    return str.join("")
  }