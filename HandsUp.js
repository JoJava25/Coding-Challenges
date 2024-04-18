const getPositions = s => {
    let d=s%27
    let a=0;

    if (d>8) a=1;
    if (d>17) a=2;
    d%=9;
    let b=0;

    if (d>2) b=1;
    if (d>5) b=2;
    d%=3
    
    return [d,b,a]
  }