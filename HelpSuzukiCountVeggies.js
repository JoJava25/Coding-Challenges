const countVegetables = str => {
    let tuples = [];
    let counts = str
      .match(/tofu|potato|cucumber|cabbage|turnip|pepper|onion|mushroom|celery|carrot/g)
      .reduce((res, word) => {
        res[word] = (res[word] || 0) + 1;
        return res;
      }, {});
    
    for (var word in counts)
      tuples.push([counts[word], word]);
    
    tuples = tuples.sort((a, b) => b[0] - a[0] || b[1].localeCompare(a[1]));
    
    return tuples;
  }