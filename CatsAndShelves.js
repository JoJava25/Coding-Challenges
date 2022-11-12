function solution(start, finish) 
{
  let jumps = 0;
  let iFinish = 0;
  for (let i = start; i < finish; i+=3) {
    jumps ++
    iFinish = i;
  }
  if ((iFinish+3) - finish === 1) {jumps++}
  return jumps;
}