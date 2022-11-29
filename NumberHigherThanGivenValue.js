function nextNumb(v) {
    if (v>91121870) return "There is no possible number that fulfills those requirements"
    if ((v&1)==0) v--
    do {
      v+=2;n=v+""; d=[]; c=0; f=0
      for (i=0;i<n.length;i++) if (d.indexOf(p=n.charCodeAt(i)-48)>=0) {f=1; break} else {d.push(p); c+=p}
      if (f==0&&c%3!=0) f=1
    } while (f==1)
    return v
  }