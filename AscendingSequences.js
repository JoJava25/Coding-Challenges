function makeSequences(n){
  let dp=[1,1]
  for(let i=2;i<=n;i++){
    dp.push(i%2?dp[i-1]:dp[i-1]+dp[i/2])
  }
  return dp[n]
}