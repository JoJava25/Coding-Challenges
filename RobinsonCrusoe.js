function crusoe(n, d, ang, distmult, angmult) {
    var x = 0.0, y = 0.0, a = ang * Math.PI / 180.0;
    for (let i = 1; i <= n; i++) {
        x += d * Math.cos(a);
        y += d * Math.sin(a);
        d *= distmult;
        a *= angmult;
    }
    return [x, y];
}