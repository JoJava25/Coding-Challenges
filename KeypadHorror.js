function computerToPhone(numbers){
    let ans=''
    for (let i=0; i<numbers.length; ++i)
    {
      if (numbers[i]=='1') ans+='7'
      else if (numbers[i]=='2') ans+='8'
      else if (numbers[i]=='3') ans+='9'
      else if (numbers[i]=='7') ans+='1'
      else if (numbers[i]=='8') ans+='2'
      else if (numbers[i]=='9') ans+='3'
      else ans+=numbers[i]
    }
    return ans
  }