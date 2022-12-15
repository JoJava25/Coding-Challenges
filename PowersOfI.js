function pofi(n)
{
  if (n%4==0)
    {
      return '1'
    }
  if (n%4==2)
    {
      return '-1'
    }
  if (n%4==3)
    {
      return '-i'
    }
  else 
    {
      return 'i'
    }
}