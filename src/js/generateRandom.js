import { lowerLetters, upperLetters, numbers, signs } from './collections';
import refs from './refs';
import { getSymbolOfPw } from './getSymbolOfPw';

export function generateRandom() {
  const pwValueStorage = [];

  if (refs.lowercase.checked) {
    pwValueStorage.push(getSymbolOfPw(lowerLetters));
  }

  if (refs.uppercase.checked) {
    pwValueStorage.push(getSymbolOfPw(upperLetters));
  }

  if (refs.numbers.checked) {
    pwValueStorage.push(getSymbolOfPw(numbers));
  }

  if (refs.signs.checked) {
    pwValueStorage.push(getSymbolOfPw(signs));
  }

  if (!pwValueStorage.length) return '';

  return pwValueStorage[Math.floor(Math.random() * pwValueStorage.length)];
}
