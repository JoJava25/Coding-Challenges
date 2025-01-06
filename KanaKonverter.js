const romajiDictLow = "aeiou";
const romajiDictUp  = "AEIOU";
const hiraDict      = "あえいおう";
const kataDict      = "アエイオウ";

function vowels(input, output){
  //todo
  let result = '';
  const romaDi = romajiDictLow + romajiDictUp;
  const allDi = romajiDictLow + romajiDictUp + hiraDict + kataDict;
  let i = 0;
  
  for (const char of input) {
    
    i = allDi.indexOf(char) % 5
    
    if (romaDi.includes(char) && output === 'romaji') {
      result += char;
    } else if (output === 'romaji') {
        result += romajiDictLow[i];
    } else if (output === 'hiragana'){
        result += hiraDict[i];
    } else if (output === 'katakana'){
        result += kataDict[i];
    }
    
  }
    
  return result;
}