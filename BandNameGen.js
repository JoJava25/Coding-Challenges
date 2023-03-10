function bandNameGenerator(str) {
    if(str[0] != str.slice(-1)){
      return 'The' + ' ' + str[0].toUpperCase() + str.slice(1)
    }
    else{
      return str[0].toUpperCase() + str.slice(1).repeat(2)
    }
  }