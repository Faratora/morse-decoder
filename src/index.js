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

// Функция для преобразования Морзе в текст
function morseToText(morse) {
  return morse
    .split('   ')
    .map((word) =>
      word
        .split(' ')
        .map((letter) => MORSE_TABLE[letter] || '')
        .join('')
    )
    .join(' ');
}

module.exports = function decode(expr) {
  const external = expr
    .replace(/11/g, '-')
    .replace(/10/g, '.')
    .replace(/00/g, ' ') // убираем излишние пробелы
    .replace(/\*+/g, '   ');
  return morseToText(external); // три пробела для разделения слов
};

morseToText(' ');
/* const morseCode =
  '00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'; */

// Основная логика
/*
const morse = decode(morseCode);
const text = morseToText(morse);

console.log('Двоичный код:', morseCode);
console.log('Преобразованный Морзе:', morse);
console.log('Итоговый текст:', text); */
