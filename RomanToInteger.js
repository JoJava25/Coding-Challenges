let romanToInteger = function(s){
    const legend = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    };
      let total = 0;
    
      for (let i = 0; i < s.length; i++) {
        if (legend[s[i]] < legend[s[i+1]]) {
          total += legend[s[i+1]] - legend[s[i]];
          i++;
        } else {
          total += legend[s[i]];
        }
      }
    
      return total;
};



console.log(romanToInteger("III"), "3")
console.log(romanToInteger("LVIII"), "58")
console.log(romanToInteger("MCMXCIV"), "1994")