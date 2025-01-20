const longestSubstringOf = ([...s], visited = new Map(), start = 0) => s.reduce((res, curr, end) => {
    if (visited[curr] != undefined) start = Math.max(visited[curr] + 1, start);   
    if (res.length < end - start + 1) res = s.slice(start, end + 1); 
    visited[curr] = end;
    
    
    return res;
  }, '').length;