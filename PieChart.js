function pieChart(str)
{
    var tot = 0, obj = JSON.parse(str);
    
    for(var i in obj)
      tot += obj[i];    
    
    for(var i in obj)
      obj[i] = (obj[i] / tot) * 360;
    
    let json = JSON.stringify(obj);
    
    return json;
}