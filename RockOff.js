function solve(a, b){
    let score1 = 0
    let score2 = 0

    for(let i = 0; i < 3; i++){
        if(a[i] > b[i]){
            score1++
        }else if(b[i] > a[i]){
            score2++
        }
    }
  console.log(score1, score2)
    if(score1 > score2){
        return `${score1}, ${score2}: Alice made "Kurt" proud!`
    }else if(score2 > score1){
        return `${score1}, ${score2}: Bob made "Jeff" proud!`
    }else{
        return `${score1}, ${score2}: that looks like a "draw"! Rock on!`
    }
}