const primeFactors = n => {
    if (n < 2) return [];
    const res = [];
    let max = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= max; ++i) {
      if (n % i === 0) {
        res.push(i);
        n /= i;
        max = Math.floor(Math.sqrt(n));
        i = (Math.min(...res) || 2) - 1;
      }
    }
    res.push(n);
    return res;
  };
  
  const isPrime = n => n > 1 && primeFactors(n).length === 1;
  
  const primeBefAft = num => {
    let [i, j] = [num, num];
    while (!isPrime(--i));
    while (!isPrime(++j));
    return [i, j];
  };