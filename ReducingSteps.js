function gcdi(x,y) {
    x = Math.abs(x); y = Math.abs(y);
    while (y !== 0) {
        var t = x; x = y; y = t % y;
    }
    return x
}
function lcmu(a, b) {
    return Math.abs(a * b) / gcdi(a, b);
}
function som(a, b) {
    return a + b;
}
function maxi(a, b) {
    return Math.max(a, b);
}
function mini(a, b) {
    return Math.min(a, b);
}
function operArray(fct, arr, init) {
    return arr.map(function (u) { init = fct(init, u); return init; });
}