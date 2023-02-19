function solution(frank, sam, tom) {
    let franksCards = frank.reduce((a,b) => (a+b));
    let samsCards = sam.reduce((a,b) => (a+b));
    let tomsCards = tom.reduce((a,b) => (a+b));
    const even = (element) => element > 8;
    
    if (franksCards > 8 && frank.some(even)) {
        return true 
    } else if (tomsCards > franksCards && samsCards > franksCards) {
    return false
    } else {
    return false
    }
  }