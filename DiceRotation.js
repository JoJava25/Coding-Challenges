function rotations(dieArray){
        let possibleSolutions = [];
        let tempSum;
        
        for(let i = 1; i < 7; i++) {
          tempSum = 0;
          for(let j = 0; j < dieArray.length; j++) {
            if(dieArray[j] === i) continue
            if(dieArray[j] === 7 - i) tempSum += 2
            else tempSum += 1
          }
          possibleSolutions.push(tempSum)
        }
        
        return Math.min.apply(Math, possibleSolutions)
}