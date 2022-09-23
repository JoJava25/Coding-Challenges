function removeSmallest(numbers) {
    var smallest;
    var newNums = [];
    numbers.forEach(function(num) {
      if (smallest > num || smallest === undefined) {
        smallest = num;
      }
    });
    var index = numbers.indexOf(smallest);
    numbers.forEach(function(n, i) {
      if (i !== index) {
        newNums.push(n);
      }
    });
    return newNums;
  }