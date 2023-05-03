let climbStairs = function(n){
    let arr = [1,2]
    for(let i =2; i <= n; i++){
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n-1]
}


console.log(climbStairs(2), "(2)")
console.log(climbStairs(3), "(3)")
console.log(climbStairs(4), "(5)")