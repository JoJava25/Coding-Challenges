function arithmetic(a, b, operator){
    var mathFun = {
      'add': function (a, b) {
          return a+b;
      },
      'subtract': function (a, b) {
          return a-b;
      },
      'multiply': function (a, b) {
          return a*b;
      }, 
      'divide': function (a, b) {
          return a/b;
      }
    }
  
    return mathFun[operator](a,b);
  }