const gcd = (a, b) => b ? gcd(b, a % b) : a;

function reduce (fraction) {
  const divisor = gcd(...fraction);
  return fraction.map(term => term / divisor);
}