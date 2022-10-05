function newAvg(arr, newavg) {
    var sm = arr === [] ? 0 : arr.reduce(function(a, b) { return a + b; }, 0);
    var add = (arr.length + 1) * newavg - sm;
    if (add > 0)
        return Math.ceil(add);
    throw new RangeError("Expected New Average is too low"); 
}