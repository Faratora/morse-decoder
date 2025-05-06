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

function morseToText(morse) {
  return morse.map((letter) => MORSE_TABLE[letter] || ' ').join('');
}

module.exports = function decode(expr) {
  console.log(expr);

  const parts = expr.match(/.{1,10}/g); // Разбиваем строку на группы по 10 символов

  console.log('Результат разбивки', parts); // Результат разбивки

  const morseParts = parts.map((part) => {
    return part
      .replace(/11/g, '-') // Заменяем '11' на '-'
      .replace(/10/g, '.') // Заменяем '10' на '.'
      .replace(/\*+/g, '') // Заменяем '*' на пробел
      .replace(/0+/g, ''); // Убираем '0'
  });

  return morseToText(morseParts);
};

const expr =
  '00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010';
console.log(decode(expr));
// // Функция для преобразования Морзе в текст

// morseToText(' ');
/* const morseCode =
  '00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'; */

// Основная логика
/*
const morse = decode(morseCode);
const text = morseToText(morse);

console.log('Двоичный код:', morseCode);
console.log('Преобразованный Морзе:', morse);
console.log('Итоговый текст:', text); */
