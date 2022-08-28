function List(){
    this.countSpecDigits=function(integersList, digitsList){
      var result = [];
      for(var i=0; i<digitsList.length; i++){
        result.push([digitsList[i], integersList.join().split(digitsList[i]).length -1]);
      }
      return result;
    }
  }