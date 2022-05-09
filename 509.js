function dontGiveMeFive(start, end)
{
  let arr = []
  for(let i = start; i <= end; i++){
    if(i.toString().indexOf('5') < 0){
      arr.push(i)
    }
  }
  return arr.length
}