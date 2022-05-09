const stringMerge = (string1, string2, letter) =>
  `${string1.split(letter, 1)}${string2.slice(string2.indexOf(letter))}`;