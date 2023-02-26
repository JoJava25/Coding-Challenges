const to1D = (x, y, [w, h]) => x + y*w;

const to2D = (n, [w, h]) =>  [n%w, n/w|0];