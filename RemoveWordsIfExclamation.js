const remove = str =>
  str
  	.split(' ')
    .filter(w => w.split('!').length != 2)
    .join(' ');