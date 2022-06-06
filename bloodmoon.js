function bloodMoon(r){
    const r2 = Math.hypot(r, r) / 2;
    const r3 = Math.hypot(r2, r2) / 2;
    return Math.PI*r3*r3/2 - (Math.PI-2)*r2*r2/4;
}