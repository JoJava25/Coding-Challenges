var makeBackronym = function(string)
{
  return string.split('').map(function(c){return dict[c.toUpperCase()];}).join(' ')
}