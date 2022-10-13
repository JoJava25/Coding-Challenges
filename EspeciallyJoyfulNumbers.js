function numberJoy(n) {
    let sum = n.toString().split('').reduce((val, item) => val + parseInt(item), 0);
    let rev = sum.toString().split('').reverse().join('');
    let res = sum * rev;
    return res === n;
  }