const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decodeToText(morse) {
  return morse.map((letter) => MORSE_TABLE[letter] || ' ').join('');
}

module.exports = function decode(expr) {
  const parts = expr.match(/.{1,10}/g); // Разбиваем строку на группы по 10 символов
  const morseParts = parts.map((part) => {
    return part
      .replace(/11/g, '-') // Заменяем '11' на '-'
      .replace(/10/g, '.') // Заменяем '10' на '.'
      .replace(/\*+/g, '') // Заменяем '*' на пробел
      .replace(/0+/g, ''); // Убираем '0'
  });

  return decodeToText(morseParts);
};
