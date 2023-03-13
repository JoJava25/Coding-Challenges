CHAR_TO_MORSE[' '] = ' ';
function encryption(message) {
  return message.split('').map(x => CHAR_TO_MORSE[x]).join(' ');
}