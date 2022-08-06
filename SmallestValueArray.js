function min (a, r) {
    var m = Math.min.apply(null, a);
    return r === "value" ? m : a.indexOf(m);
  }