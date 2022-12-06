function GetSum( a,b ) {
    let result = 0;
    let bigger = a > b ? a : b;
    let smaller = a > b ? b : a;
    for (let i = smaller; i <= bigger; i++) { result += i }
    return result
 }