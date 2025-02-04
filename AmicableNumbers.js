function amicableNumbers(num1, num2) {
    var array = [];
    for (var i = 1; i < num1; i++) {
        if (num1 % i === 0) {
            array.push(i);
        }
    }
    return array.reduce( (n1, n2)=> n1 + n2 ) === num2

}